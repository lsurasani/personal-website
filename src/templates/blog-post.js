import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from 'semantic-ui-react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <Link to={`/blog/`}><Button>Back to All Posts</Button></Link>
        <h1>{post.frontmatter.title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`