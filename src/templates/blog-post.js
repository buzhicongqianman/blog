import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/Layout'
import Gitment from 'gitment'
import 'gitment/style/default.css'

export default class extends Component {
  componentDidMount() {
    const gitment = new Gitment({
      id: this.props.data.markdownRemark.frontmatter.title, // optional
      owner: 'buzhicongqianman',
      repo: 'blog-comments',
      oauth: {
        client_id: '65c93f8402e25333da6f',
        client_secret: '77bc0740abee5929d50cb04c45d91caf199edb88',
      }
    })
    
    gitment.render('comments')
  }

  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <article>
          <h1 className={css`text-align: center;`}>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <div id="comments"></div>
      </Layout>
    )
  }
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