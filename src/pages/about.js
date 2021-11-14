import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
  
      return (
        <Layout location={location} title={siteTitle}>
          <Seo title="All posts" />
          <p>
          Hello everyone! I have been coding for the past few years and it's become my **passion**. I try to learn something new every day. I have been thinking about writing a blog about programming and this is the outcome of this thought. I hope these tips, based off of my experience, will help you want to learn about programming. If you read this description and you want help coding something new, please write to me.
          </p>
        </Layout>
      )
    
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`