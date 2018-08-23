import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'

import Navbar from '../Navbar'

const mainStyle = css`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 .7em;
  text-align: justify;
`

// const footerStyle = css`
//   background: #eee;
//   text-align: center;
//   padding: 2em;
//   margin-top: 2em;
// `

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: '不知从前慢' },
            { name: 'keywords', content: '不知从前慢' },
          ]}
        >
        </Helmet>
        <header>
          <Navbar />
        </header>

        <main className={mainStyle}>
          {children}
        </main>

        {/* <footer className={footerStyle}>
          <small>@不知从前慢</small>
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
