import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />

      <div className="two-column-container">
        <section className="prose">
          <p>
            I'm a 3rd year computer science student at Northeastern University
            in Boston. I've worked at Cisco and John Hancock, and I'm going to
            work at Hubspot and Palantir in 2021.
          </p>
          <p>
            I'm also leading development at{" "}
            <a href="https://www.c4cneu.com">Code 4 Community</a> where we
            create software solutions for nonprofits in Boston.{" "}
          </p>
          <p>
            <b className="big-bold">
              I believe we have a moral imperative to create software that makes
              a positive impact on the world.
            </b>
            <sup>☦</sup> If you're a Northeastern undergraduate and feel the
            same way, <a href="https://www.c4cneu.com/apply">join me</a>.
          </p>
          <p>
            I'm a big Programming Languages nerd (see{" "}
            <Link to="/cool-links">Enrichment</Link>). My least hated
            programming language is currently Racket.
          </p>
          <img
            src="racket-my-beloved.gif"
            alt="a gif of a heart shaped locket opening, revealing the phrase 'Racket my beloved'"
          />
          <small className="image-caption">
            Not favorite, <i>least hated</i>. Racket is only my second favorite
            programming language.<sup>☦</sup>
          </small>
          <p>
            I used to play collegiate Starcraft II when I had free time and the
            game was still somewhat alive.<sup>☦</sup>
          </p>
          <p>
            I take care of two beautiful plants: a pothos named Alonzo and a
            spider plant named Alan.<sup>☦</sup> If you have recommendations for
            more plant names, let me know at{" "}
            <span className="code">ryan.matthew.jung⚓gmail.com</span>
          </p>
        </section>

        <section className="column-2">
          <div className="profile">
            <StaticImage
              alt="Me, in a grey hoodie scratching my head looking confused"
              class="my-ugly-mug"
              src="..\images\grey-hoodie.jpg"
              placeholder="none"
              aspectRatio={1}
            />
            <p>Really, this is one of the best photos of me I have.</p>
            <p>
              <small>
                <a href="https://github.com/rymaju">Github</a> |{" "}
                <a href="https://www.linkedin.com/in/ryanmjung/">LinkedIn</a>
              </small>
            </p>
          </div>
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
  }
`
