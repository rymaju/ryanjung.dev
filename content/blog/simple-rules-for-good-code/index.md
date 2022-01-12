---
title: Simple Rules for Good Code
date: 2022-01-11
author: Ryan Jung
summary: The axioms of software development I try to abide by in order to write good code
tags:
---


👷 This post is a work in progress!

Whenever I try to explain what I think "good" programming means. I often have trouble articulating exactly what and why I think the way I do. This is an attempt to clarify my thought process, as well as a guide that I can return to when I'm working through a difficult problem. This is a living document, and will likely change as I gain more real world experience.

Here are the axioms of software development that I live by:

0. its dangerous to code alone
0. build simple extensible models of the domain (and understand them)
1. think through examples
2. break functions down into conceptual tasks (keep it short)
3. always write a signature
4. make the purpose obvious
5. follow the structure of the data
6. keep it pure, favor immutability
7. separate impure code from pure code
8. empower the caller
9. abstract last
10. optimize last
11. use pretty pictures

### 0. Its dangerous to code alone

Pair programming results in better code, spreads knowledge throughout a team, and enforces a reasonable human-friendly design. Always choose to pair program when possible. Go out of your way to find someone who will pair with you. When pairing, swap the roles of driver and navigator after every large conceptual task or if a reasonable amount of time has elapsed. Always swap roles, even if it results in a break in flow. This goes without saying, but be respectful to your partner.

### 0. Build simple models of the domain (and understand them)

Its hard to write good code when you don't understand what it means or what it represents. When crafting a data definition, always choose the most straightforward option that best aligns with the domain.

Attempt to make illegal states unrepresentable. Or at least make illegal states obviously incorrect.

Write examples of the data. They will function both as documentation and as fixtures for tests.

For example:

```
DO:
A Card is a 2-tuple: (Rank, Suit)
and represents a card in a standard 52 deck of cards

A Rank is one of:
One, Two, Three, Four, Five, Six, Seven, Eight, ... // omitted for brevity

A Suit is one of:
Club, Diamond, Spade, Heart

Examples:
AceOfSpades = (One, Spade)
...
----------------------------------------------------
DONT:

A Card is a mutable vector: [String, String]
<eof>
```

Note that in the bad example above the chosen data structure doesn't really make sense in the context of the domain. Its too open, and is vague as a result.

Its also difficult to write functions on data definitions that fundamentally aren't conducive to those operations. Here are some common examples:

- Using an unordered set for an ordered list
- Using an ordered list for an unordered set
- Using an ordered list for a priority queue
- Using a vector for a queue
- Using a string instead of an enumeration/sum-type
- Using a dictionary for a record/struct
- Using a dictionary for everything

Often people choose data structures that are vague, which allows illegal state to be represented. Only use a collection when you truly have no idea how many elements will be stored. Even if you have some idea, for example if you know that the empty list or a list with over 50 elements is invalid, then clearly document it.

Dictionaries are useful but often misused. Its easy to just throw keys and values into them without thinking, then rely on them being there later. *There is no guarantee that any key exists in an arbitrary dictionary*. Therefore, if you only expose that dictionary without any documentation, then users will need to check for that key's existence and handle the case where it does exist (if you are lucky).

If you have a finite set of keys (fields) then simply use a record or struct, which have a finite set of named fields that must contain data. If the keys are truly an open set, ensure that the set of keys and values are well-defined and as refined as possible.

For example, always prefer `Dictionary<Id, Customer>` over `Dictionary<String, Any>`. Hide the implementation of the dictionary behind some functions/methods so that setting arbitrary key value pairs is impossible.

### 1. Think through examples

When writing a function for defining data, think about the usage first. Consider how someone might want to use it, then write the resulting code in the most natural way to fit that purpose. While you should make use of abstractions if extension is likely, do not abstract early for no reason. An example of improper abstraction in object oriented code is giving every class an interface, even when there is only one instance of that class.

As mentioned above, when defining data you should make sure to define examples of those data. Working examples help a reader understand the data better and make testing easier.

When defining functions, working through examples encourages a user-friendly design and careful consideration of edge cases. Conveniently these examples are also unit tests. If you are writing small pure functions as I suggest below, then writing tests is often as simple as writing down the examples.

People often don't follow Test Driven Development because writing tests would be too hard, but if writing a test is too hard then your code is probably poorly designed. Consider the following common categories of "untestable" code:

- A function with a lot of side effects: this is a sign that the function is doing too many things and that you mixed impure code into pure functions
- A function with a difficult to observe side effect: a sign that the side effect should be isolated into a short function and well documented;
- A function that uses difficult to construct data: a sign that the data is not well designed, or dependencies are not well managed (See "Six Approaches to Dependency Injection")
- A function that consumes/outputs a large amount of data: should be broken into smaller functions anyway, and tests for the large function can be constructed from tests for the helper functions.


### 2. Break functions down into conceptual tasks (keep it short)

As a general rule, no function should exceed 10 lines. No function should contain whitespace delimiting blocks within the function. This is a code smell, and indicates that the function should be broken into the smaller functions for each block.

```
DONT

function makeCake (fridge, pantry) {
  // Prepare ingredients
  fridge = openFridge()
  pantry = openPantry()
  eggs = fridge.eggs
  milk = fridge.milk
  flour = pantry.flour
  
  // Prepare cake
  wet = mixWet(eggs, milk)
  dry = mixDry(flour)
  batter = combine(wet, dry)
  tin = cakeTin.pour(batter)
  
  // Bake cake
  oven.insert(tin)
  wait(BAKING_TIME)
  oven.get()
-------------------------
DO:

function makeCake(fridge, pantry) {
  ingredients = prepareIngredients(fridge, pantry)
  tin = prepareCake(ingredients)
  bake(tin, BAKING_TIME)
}
```

This ensures your code is small enough to conceptually understand (and therefore test). It also makes it more readable. Consider how the comments describing each block actually indicate a separate conceptual task that ought to be tested individually. It even revealed a part of the code that could be abstracted or reused in the future: `bake`.

Your program should only contain two kinds of functions: tiny functions that do a single task (often one-liners), or small functions that simply compose other functions (like `makeCake`).

### 3. Always write a signature

Even if you're working in an untyped language, you should write down what the "types" that the function consumes and computes as output. Since you're already modeling your data according to the domain and giving them names, it should be easy to write a proper signature.

Sometimes the signature of a function reveals a design flaw. If the output of your function is `void` (`unit`, `IO()`), then alarms should be going off in your head. Its a signal that you need to be careful because this function is going to involve some side effects.

Writing a signature also gives you a clear goal to work towards. If the signature of your function is from `A -> B`, then you know your job is done when you get a valid instance of type `B`.

### 4. Make the purpose obvious

If you are writing a complex function, the name and signature of the function is often not enough to describe what it does. Often times a function might do something complicated and require an in-depth description. The signature may also require an explanation if it looks unnatural.

```
// dealCards : Deck -> (Deck, Hand)
// deals five cards from the *top* of the deck, producing the new deck with five less cards and the five cards removed from the deck in original order
function dealCards(deck) { ... }
```

Purpose statements also document important assumptions, invariants, or side effects.

```
// dealCards : Deck -> Hand
// SIDE EFFECT: Mutates the deck by removing five cards from the top of the deck
// ASSUMPTION:  The deck contains >=5 cards
// INVARIANT:   The resulting hand is always non-empty
function dealCards(deck) { ... }
```

To be continued...
