import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Quote from "../components/quote"
import Dagger from "../components/dagger"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Enrichment" />
      <div class="two-column-container">
        <section class="prose">
          <div class="preamble">
            A collection of ok+ papers, talks, and articles.
            <br />
            <small>
              * - Light reading/listening, any first year CS undergrad could
              follow
            </small>
            <br />
            <small>
              ** - Makes you think, requires some technical background knowledge
            </small>
            <br />
            <small>
              *** - Academic and painful, probably involves math (yuck)
            </small>
          </div>
          <ol class="quote-list">
            <Quote
              title="99,000 ways to say (I love you)"
              content="or 'A Unified Approach to Solving Seven Programming Problems', but that's a worse title. This is a fun introduction to minikanren through a how it can effortlessly solve a series of challenging problems."
              source={
                <>
                  <a href="https://io.livecode.ch/learn/namin/icfp2017-artifact-auas7pp">
                    webpage
                  </a>
                </>
              }
            />
            <Quote
              title="Developing Developers*"
              content="How to teach computer science and why."
              source={
                <>
                  <a href="https://felleisen.org/matthias/Thoughts/Developing_Developers.html">
                    webpage
                  </a>
                </>
              }
            />
            <Quote
              title="Propositions as Types*"
              content="A fascinating talk on the history of computer science and its links to logic. AKA a first year intro to Curry Howard Isomorphism."
              source={
                <>
                  <a href="https://www.youtube.com/watch?v=IOiZatlZtGU">talk</a>
                </>
              }
            />

            <Quote
              title="Expressiveness**"
              content="Matthias's PL lecture notes, a must read for anyone questioning why an application developer should learn about programming languages."
              source={
                <>
                  <a href="https://felleisen.org/matthias/4400-s20/lecture27.html">
                    webpage
                  </a>
                </>
              }
            />
            <Quote
              title="Danger: unsafe languages**"
              content="An in-depth series on the dangers of C/C++."
              source={
                <>
                  <a href="https://felleisen.org/matthias/Thoughts/Danger__unsafe_languages.html">
                    webpage
                  </a>
                </>
              }
            />

            <Quote
              title="The Essence of Events***"
              content="What the heck are Futures and Promises really? If you want to grok callbacks, monads, and more, this is a great read."
              source={
                <>
                  <a href="https://www.cl.cam.ac.uk/~nk480/essence-of-events.pdf">
                    pdf
                  </a>
                </>
              }
            />
            <Quote
              title="Beautiful Racket*"
              content="Want to build programming languages with Racket? This is a very accessible intro to the coolest parts of Racket and PL in general."
              source={
                <>
                  <a href="https://beautifulracket.com/">ebook</a>
                </>
              }
            />
            <Quote
              title="The Most Beautiful Program Ever Written*"
              content={
                <>
                  A wonderful intro to Scheme and interpreters, plus a bit of
                  Minikanren<Dagger /> at the end.
                </>
              }
              source={
                <>
                  <a href="https://www.youtube.com/watch?v=OyfBQmvr2Hc">talk</a>
                </>
              }
            />

            <Quote
              title="The visitor pattern is basically the same as Church Encoding**"
              content="Another reminder that OOP and FP aren't so different after all."
              source={
                <>
                  <a href="https://www.haskellforall.com/2021/01/the-visitor-pattern-is-essentially-same.html">
                    webpage
                  </a>
                </>
              }
            />
            <Quote
              title="Code Walks*"
              content="How to give deep feedback on code beyond a simple PR review."
              source={
                <>
                  <a href="https://felleisen.org/matthias/4500-f21/lec8.html">
                    webpage
                  </a>
                </>
              }
            />

            <Quote
              title="What Are Reactive Systems?**"
              content="A intermediate introduction to message driven distributed systems. Good if you know basic web architecture (frontend/backend) and want to learn more."
              source={
                <>
                  <a href="https://www.youtube.com/watch?v=eRxLfUIMJwk">talk</a>
                </>
              }
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
