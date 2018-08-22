import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'react-emotion'
import Layout from '../Layout'
import { query } from '../../pages/categories';

const tagStyle = css`
  display: inline-block;
  padding: .5em;
  margin-right: .5em;
  background: #eee;
  cursor: pointer;
`

const Categories = <StaticQuery
  query={graphql`
  query TagQuery {
    allMarkdownRemark{
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
`}
  render={}
/>

export default Categories