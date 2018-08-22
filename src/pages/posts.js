import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import Layout from "../components/Layout"

const linkStyle = css({
  textDecoration: 'none',
  color: '#454545',
  ':hover': {
    textDecoration: 'underline'
  }
})

const titleStyle = css`
  font-size: calc(.7rem + 1vw);
  @media (min-width: 1000px) {
    font-size: 1.32rem;
  }
`

const dateStyle = css`
  display: none;
  font-weight: normal;
  @media(min-width: 500px) {
    display: inline;
    float: right;
    color: #ddd;
  }
`

export default ({ data }) => {
  
  const postList = data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <Link to={node.fields.slug} className={linkStyle}>
      <h3 className={titleStyle}>
        {node.frontmatter.title}
        <span className={dateStyle}>
          {new Date(node.frontmatter.date).toLocaleDateString()}
        </span>
      </h3>
      </Link>
    </div>
  ))
  return (
    <Layout>
      {postList}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`