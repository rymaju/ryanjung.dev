---
title: Everything You Needed to Learn in Fundies
date: 2021-03-09
author: Ryan Jung
summary: A breakdown of the most important things I remember and use from Fundies 1 & 2.
tags:
---

I often hear people I know how are taking or have taken fundies complaining about how impractical it is: "Racket is dumb", "Why aren't we starting with ArrayLists", "Fundies is a weed out class" etc.

I actually disagree with that mentality since it sort of misses the point of what fundies _is_. You could have looked up a 3 hour tutorial of how to use Python on YouTube for free, but a college level intro to CS sequence should teach you how to **think** in a way that is most conducive to writing well designed code and tackling difficult problems.

---

Authors note (12/28/2021):

I still agree with most of this, but not all. I realize that I myself did not fully understand many of these concepts as clearly as I thought. I have striked out and added some words/phrases to remove misleading or factually incorrect information.

My writing is also awful. I wish I had paid more attention in my English writing classes.

---

## Fundies 1

### Thinking in Contracts

When I was a fundies 1 TA I would often ask confused students about what their function takes in and what it outputs. In ISL, which only supports pure functions, it will almost always be true that your output consists of your input in some fashion. Being able to quickly recognize the shape of your input (and invariants/restrictions on that input) is a very useful tool in real life.

Here's an example: I currently work at a large financial company for a co-op and I was tasked to maintain a piece of code a previous co-op had written in Python. Here is a very slightly exaggerated snippet that I, someone with no knowledge of the code, had to understand and maintain.

```python
def mystery(cwa, s, k):
    total_sum = 0
    for i in s:
        total_sum += cwa['banana'][i]

    return total_sum
```

Now think. What is the type of the input and output? Any Pythonista should get the following:

`cwa` is a dictionary, `cwa['banana']` is too (probably).

`s` is some iterable of type `X`, and therefore we also know that `X` is the type of the keys of `cwa['banana']`.

`k` is never even used, so we have no idea what it is. It's irrelevant to this function.

And of course, we're outputting a Number, but we only know this because `total_sum` was initialized to 0.

We also know that there should be an invariant that `cwa['banana']` exists at all, if it doesn't then we crash when we try to access it.

This was a more trivial example but it demonstrates how important this skill is. Not every language is nice enough to tell you what its inputs and outputs are (looking at you Python and Javascript).

### The ability to articulate the purpose of functions

One of the best tricks to get your mind around a tough programming problem is to explain how you might solve the problem in English (or whatever your language of thought may be). Talking through it also helps and is humorously called the 'rubber duck' method, because it's a well known fact that all good programmers keep a rubber duck in lieu of real human companionship.

The ability to articulate the problem and its solution in a concise few sentences guarantees you have thought out a solution that you actually understand. It also makes sure that the function has a reasonably scoped responsibility. This makes your code easier to read, easier to test, and probably shorter.

In real life you will probably be documenting your functions or using the Wishlist method from fundies almost every day you write code. At the very least you'll have more informative git messages than 'fixed the code'.

### Test Driven Development

Ignoring that I don't personally like the idea of Test Driven Development, fundies focuses heavily on making sure you write tests to show your code works. In all the intro to CS courses that my friends have taken at "elite" schools like UC Berkeley, Harvard, and Cornell, passing _your own_ tests was never a part of the course. In real life nobody hands you a select test suite for every new feature you're writing. _You_ need to write that yourself.

You would be surprised by how many computer science students think that writing "tests" is printing a lot of variables and running the code to see if it works.

### Recursion

If you've taken APCS then you know how badly recursion can be taught. Fundies succeeds in teaching recursion by acting like it's no big deal because it really isn't. When your only way to solve the problem is with recursion and the recursive call is given to you by the structure of the input you need to nod your head and fill in the blanks.

Suddenly you learned how to use recursion to traverse a linked list, or a tree, or any other recursively defined structure.

You also learn about accumulators, generative recursion, base cases, and all without all the tears or snarky "why not use a for loop" questions.

It goes without saying that recursion used in real life, although admittedly iterative styles are often heavily preferred. At the very least recursion is needed to write and understand recurrences in algorithms which is itself useful.

### Accumulators

Thinking of an argument to a function being the "computation so far" or information being "passed along" the recursive call is absolutely foreign to a lot of people who were taught recursion incorrectly. Fundies once again makes it one of the only possible ways to solve a myriad of problems in a certain runtime. I believe the idea is first introduced when writing a function to reverse a list in O(n) time. knowing how that works is so useful when learning algorithms in later courses or if you go on to learn about continuations and how they work.

### Graphs

There are so many real life problems that have been solved by modeling them as a graph. If you want to understand how the internet works or complex database design then you need to understand how to work with graphs.

### Lambdas

I love how fundies sneakily shows you first class functions and pretends it's completely normal. Most people have their first experience with lambdas through Python or Javascript. Imagine all your life you've learned that you can only define functions with some special keyword, then one day you're learning about sorting in Python and you see you have to pass in some weird `lambda x: x[0]`. Anonymous functions aren't normal to a lot of people and it's wonderful that you essentially start off with them in fundies.

### Functional goodness

A list of functional tools that make your code better that you learn in fundies:

- Map
- Foldr/Foldl also known as Reduce
- Filter
- Andmap also known as All
- Ormap also known as Any

And of course I will also make the obvious comment that you cant understand something like MapReduce, the algorithm that arguably made Google as influential as it is today without knowing Map or Reduce.

---

## Fundies 2

### Class hierarchies and organization

May be a weird thing to start with but anybody who has taken APCS knows how differently this can be taught. I for one am glad that they dont touch inheritance before teaching interfaces. I love how you learn UML diagrams and is-a has-a relationships right off the bat. This is a really important skill that you need to demonstrate in OOD and in real life were OOP is the norm.

### Single responsibility (Double dispatch)

~~Ok, I admit that double dispatch is not really a thing in real life. But,~~ its extremely useful as an educational tool to teach single responsibility which is one of the most important things you need to know when writing code. You learn a bit of this in fundies 1 but separating your functions (and now classes) into small testable chunks is very important. It's so easy to have a monolithic utility or singleton class that grows to be thousands of lines long. That's exactly the kind of legacy code that can't be refactored and that costs companies time and money to fix. Learning how to keep things modular from the beginning is good practice and makes you keenly aware of how code bloat and system design is affected by individual choices from software engineers.

_(Addendum: Double Dispatch =/= Single Responsibility Principle)_

### Polymorphism

You really get into this in OOD, but fundies lays a strong foundation for loose coupling by using interfaces over strict implementations. Using the interface type and then allowing the object to polymorphically use whatever implementation of the method the object uses is one of the first things you learn in fundies 2.

Of course this is one of the main tenets of OOP, if you don't get this then you really don't get why OOP is so powerful.

### Avoiding field of field hell

Real story: we're developing a product for a charity in Boston and we get an error...

```js
cannot read property 'start' of undefined
```

We look in the code and we see something like this:

```js
function mystery(event) {
  return event.details.start
}
```

See what happened here? We don't know if the event even _has_ a details. We don't even know that _event_ is not null or undefined!

Field of field bugs are really common, and so being taught to avoid FoF access where possible helps you predict these bugs before they show up.

### The expression problem

I love the expression problem, it's so cool. Having an understanding of the design advantages and limitations of object oriented programming over the functional paradigm we were using before in ISL (or in languages like C) is so cool.

In short, if you want to extend some type, the object oriented approach makes it as simple as adding a new class that extends some interface, while the functional approach is harder because you need to find every function that uses that type to ensure it handles your new extension as well.

On the other hand, if you wanted to add a new function the object oriented programming makes it hard because you're going to need to go through every separate class and add it to each implementation, but if you used functional programming it's as simple as defining a new function.

There is an inherent tradeoff in code organization here. Note that this isn't an argument about efficiency, this is an argument about **design**.

### The problem with equality

Equality is a really tricky subject and I love how fundies handles it. You learn about reference equality and how `==` really works in Java. But then you realize that extensional equality isn't as straightforward as you might think. If you have a `Fraction` class is `2/4` the same as `1/2`? You also learn about hashes here, which is essential for understanding associative arrays which are _the_ most important data structure for many real life software products.

### The problem with immutability

You know, if you're gonna spit on pure functional languages you should at least have good points. Luckily, fundies 2 gives you some pretty good reasons why a _purely_ immutable world would kind of suck.

Some things aren't possible without mutation. You cant represent actual cyclic data without mutation or `null`, and some likes like associative arrays, hashsets, and dynamically sized arrays are ~~significantly~~ slower without mutation. _(Addendum: This is misleading. Immutable data structures aren't as slow as you might think. See [this](https://en.wikipedia.org/wiki/Persistent_data_structure) and [this](https://www.amazon.com/Purely-Functional-Data-Structures-Okasaki/dp/0521663504))_

You need to know this in real life because sometimes you only have immutable data and at that point you need to know what options are available to you.

### Pandora\'s Box\<T> (The problem with mutation)

Mutation might be more convenient for fast code but it also makes your code harder to test. You need to look for the effects of mutation or spy on method calls to make sure that the code is doing what you want. When you mess with references you end up having to deal with `null`. Luckily Maybe types or Optionals are quite common in most modern languages, but even so you'll need to do some defensive programming.

### Big O

~~This is probably the single most important thing you learn in fundies.~~ _(Addendum: this is so wrong I'm honestly embarrassed I ever wrote this. The world is so much more than Big O and Leetcode. Please get off Reddit.)_ The ability to analyze your functions and consider how much time they take in relation to their input or some other factor is essential in production when speed matters. When you're working there will be real consequences to slow code. What happens when processing financial data takes O(2^n) time instead of O(n) time? A bad algorithm takes longer, and in a very literal sense time is money. Your company is paying for the ability to run their code somewhere in the cloud.

Understanding time and space complexity is essential to passing difficult technical interviews at large software companies like Google and Facebook. Besides personal projects and actual competency with a handful of languages, Big-O and algorithms practice is the most important factor in landing a co-op, internship, or job after college.
