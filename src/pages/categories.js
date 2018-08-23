import React, {Component} from 'react'
import {css} from 'react-emotion'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import Badge from '../components/UI/Badge';

const linkStyle = css({
  textDecoration: 'none',
  color: '#454545',
  ':hover': {
    textDecoration: 'underline'
  }
})

const tagsBoxStyle = css`
  width: 100%;
  margin-left: -0.25em;
  margin-bottom: 2em;
  display: flex;
  flex-flow: wrap;
`

const relativePostsBoxStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const postTitleStyle = css`
  text-decoration: none;
  margin: .25em 0;
  color: #454545;
  font-size: calc(.7rem + 1vw);

  @media (min-width: 1000px) {
    font-size: 1.32rem;
`

const postDateStyle = css`
  display: none;
  font-weight: normal;
  @media(min-width: 500px) {
    display: inline;
    float: right;
    color: #ddd;
  }
`

export default class extends Component{
  state = {
    tags: this.getAllTags(),
    relativePosts: null,
    tagSelected: ''
  }

  getAllTags() {
    const tags = {}
  
    this.props.data.allMarkdownRemark.edges.forEach(({node}) => {
      node.frontmatter.tags.forEach( tagName => {
        if (!(tagName in tags)) {
          tags[tagName] = []
        }
        tags[tagName].push({
          id: node.id,
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          link: node.fields.slug
        })
      })
    })
    return tags
  }

  onTagClicked = (tagName, relative) => {
    this.setState({
      relativePosts: relative,
      tagSelected: tagName
    })
  }

  render() {
    const allTagsLink = Object.keys(this.state.tags).map(tagName => (
      <Badge
        key={tagName} 
        clicked={() => this.onTagClicked(tagName, this.state.tags[tagName])} 
        isActive={this.state.tagSelected === tagName}
      >
        {tagName}
      </Badge>
    ))

    let relativePostsLink = '选择一个标签'
    if (this.state.relativePosts) {
      relativePostsLink = this.state.relativePosts.map(post => (
        <div>
          
            <Link to={post.link} className={linkStyle}>
            <h3 className={postTitleStyle}>
              {post.title}
              <span className={postDateStyle}>{new Date(post.date).toLocaleDateString()}</span>
            </h3>
            </Link>
        </div>
      ))
    }
    
    return (
      <Layout>
        <h2>标签</h2>
        <div className={tagsBoxStyle}>
          {allTagsLink}
        </div>
        <h2>文章</h2>
        <div className={relativePostsBoxStyle}>
          {relativePostsLink}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
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
        }
      }
    }
  }
`