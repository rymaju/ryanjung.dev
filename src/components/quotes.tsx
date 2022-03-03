import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Quote from "./quote"
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
      title='When People Ask Me How I Got "So Good at Programming"'
      content={
        <StaticImage
          src="https://i.pinimg.com/564x/29/42/ad/2942ad72943ca3e56c178983808781e0.jpg"
          alt="A comic about how everything comes down to practice"
        />
      }
      source={
        <>
          <a href="https://www.instagram.com/sarahandersencomics/">
            Sarah Andersen
          </a>
        </>
      }
    />

    <Quote
      title="Why Empathy Matters in Tech"
      content={
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PogWhbDpCWs?start=687"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      }
      source={
        <>
          <a href="https://www.youtube.com/c/hellomayuko">Mayuko Inoue</a>
        </>
      }
    />
  </ol>
)

export default Quotes
