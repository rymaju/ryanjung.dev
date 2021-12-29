import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import DumbJoke from "../components/dumb-jokes/dumb-joke"
import Layout from "../components/layout"
import Quotes from "../components/quotes"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <div class="two-column-container">
        <section class="prose">
          <Quotes />
        </section>

        <section class="column-2">
          <div class="profile">
            <StaticImage
              alt="Me, in a kayak looking like an idiot"
              class="my-ugly-mug"
              src="https://ca.slack-edge.com/T016K6GE7FC-U016CHN2BJS-aac5ceb4d9be-512"
              placeholder="none"
              aspectRatio={1}
            />
            <DumbJoke />
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
