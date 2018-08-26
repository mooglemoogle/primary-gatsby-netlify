import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './bootstrap/bootstrap.less'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Primary Show Gatsby">
      <meta name="apple-itunes-app" content="app-id=1402714341" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      <link rel="alternate" type="application/rss+xml" title="Primary RSS" href="https://rss.simplecast.com/podcasts/6215/rss" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
