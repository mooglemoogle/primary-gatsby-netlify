import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import './bootstrap/bootstrap.less'

const Layout = ({ children, data }) => (
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
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <meta name="apple-itunes-app" content="app-id=1402714341" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="alternate" type="application/rss+xml" title="Primary RSS" href="https://rss.simplecast.com/podcasts/6215/rss" />
        </Helmet>
        <Navbar />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
