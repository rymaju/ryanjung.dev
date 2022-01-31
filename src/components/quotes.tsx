import React from "react"
import Quote from "./quote"
import Dagger from "./dagger"
// some docs
const Quotes: React.FC = () => (
  <ol className="quote-list">
    <Quote
      title="Good Programming"
      content="By “good programming,” we mean an approach to the
      creation of software that relies on systematic thought, planning, and
      understanding from the very beginning, at every stage, and for every step."
      source={
        <>
          How to Design Programs,{" "}
          <a href="https://htdp.org/2021-5-4/Book/part_preface.html">Preface</a>
        </>
      }
    />
    <Quote
      title="Egoless Programming"
      content="A programmer who truly sees his program
              as an extension of his own ego is not going to be trying to find
              all the errors in that program. On the contrary, he is going to be
              trying to prove that the program is correct—even if this means the
              oversight of errors which are monstrous to another eye."
      source="The Psychology of Programming"
    />
    <Quote
      title="On Trusting Software Engineers"
      content="I don't know quite how to put this, but our entire field is bad at what we do and if you rely on us everyone will die."
      source={<a href="https://xkcd.com/2030/">xkcd #2030</a>}
    />
    <Quote
      title="Blub Programmers"
      content={
        <>
          As long as our hypothetical Blub programmer is looking down the power
          continuum, he knows he's looking down. Languages less powerful than
          Blub are obviously less powerful, because they're missing some feature
          he's used to. But when our hypothetical Blub programmer looks in the
          other direction, up the power continuum, he doesn't realize he's
          looking up. What he sees are merely weird languages. He probably
          considers them about equivalent in power to Blub, but with all this
          other hairy stuff thrown in as well.{" "}
          <b>Blub is good enough for him, because he thinks in Blub.</b>
        </>
      }
      source={
        <>
          Paul Graham,{" "}
          <a href="http://www.paulgraham.com/avg.html">Beating the Averages</a>
        </>
      }
    />

    <Quote
      title="The Value of Systematic Design"
      content="Eventually your program will
              also fail. Other programmers may use it in an unanticipated
              manner. Real-world users may find differences between expected and
              actual behavior. Because you have designed the code in a
              systematic manner, you will know what to do."
      source={
        <>
          How to Design Programs,{" "}
          <a href="https://htdp.org/2021-11-15/Book/part_epilogue.html">
            Epilogue
          </a>
        </>
      }
    />
  </ol>
)

export default Quotes
