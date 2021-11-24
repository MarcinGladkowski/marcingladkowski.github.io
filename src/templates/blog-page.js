import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPageTemplate = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About" />
            <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
            </header>
            <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
            />
        </Layout>
    )
}

export default BlogPageTemplate

export const pageQuery = graphql`
  query BlogPageBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`