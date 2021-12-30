import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Quote from "../components/quote"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Book Reviews" />

      <div class="two-column-container">
        <section class="prose">
          <div class="preamble">
            A bunch of popular programming books rated on a scale of (zero, ok-,
            ok, ok+).
          </div>
          <ol class="quote-list">
            <Quote
              title="The Reasoned Schemer (ok+)"
              content="A fun and eyeopening introduction to the world of relational programming."
            />
            <Quote
              title="The Pragmatic Programmer (ok+)"
              content="The only 'guru' book I would ever recommend. Almost every page contains some gem of wisdom that helps illuminate what good software development really means. While the homey anecdotes can be a bit grating, it's extremely easy to read and understand."
            />
            <Quote
              title="How to Design Programs (ok+)"
              content={
                <>
                  A proper introduction to computer science with a emphasis on
                  systematic program design.<sup>☦</sup>
                </>
              }
              source={
                <>
                  <a href="https://htdp.org/">ebook</a>
                </>
              }
            />

            <Quote
              title="How to Design Classes (ok+)"
              content="A deep explanation of object oriented programming starting from a functional programming perspective (HtDC). This is a true guide to OOP (rather than a handbook of tips like Effective Java) and gives you a detailed systematic way of developing good object oriented code. The book is unfinished, but still the best introduction to good OOP I have found so far."
              source={
                <>
                  <a href="https://felleisen.org/matthias/htdc.html">pdf</a>
                </>
              }
            />

            <Quote
              title="Effective Java (ok+)"
              content="A easy to digest guide on how to write good OO code from the creator of the Java API. I reread the table of contents often to remind myself how OOP is supposed to be done."
            />
            <Quote
              title="Design Patterns (ok)"
              content="The classic Gang of Four book. Like DDD, you probably need this to be glossary/buzzword compliant with any large OO codebase and will help you write better OO code. That being said, don't make the mistake of thinking that this is the best or only way to design programs."
            />
            <Quote
              title="Domain Driven Design (ok-)"
              content="A very influential book on how to model information in data. You find the language of DDD everywhere in our new microservice dominated world. I found it surprisingly boring and long winded. Read the part on bounded context plus the glossary. The rest is nice, and the vocabulary is very useful, but anybody that claims they have a 'correct' way of modeling all data is fundamentally wrong (as time as shown)."
            />
            <Quote
              title="Designing Data Driven Applications (ok+)"
              content="An almost uncomfortably deep dive into the details of databases and distributed systems. This is a great read that explains the how and why of designing large distributed systems."
            />

            <Quote
              title="Algorithms (ok+)"
              content="The best free book on algorithms."
              source={
                <>
                  <a href="http://jeffe.cs.illinois.edu/teaching/algorithms/">
                    ebook
                  </a>
                </>
              }
            />
            <Quote
              title="Operating Systems: Three Easy Pieces (ok)"
              content="A free and playful introduction to operating systems."
              source={
                <>
                  <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/">ebook</a>
                </>
              }
            />

            <Quote
              title="Intro. to the Theory of Computation 3E <Sipser> (ok)"
              content="Good but boring!"
            />

            <Quote
              title="Learn You A Haskell For Greater Good (ok)"
              content="A very cute book that teaches Haskell. It's a wonderful read for any LISP'ers like me who want to see other approaches to functional programming."
            />
          </ol>
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
