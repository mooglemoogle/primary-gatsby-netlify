import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo-500.png'
import './navbar.less'

const Navbar = () => (
  <div id="header">
    <div className="brand-container">
      <div className="brand-image">
        <Link to="/">
          <img src={logo} alt="Primary Podcast Logo" className="main-logo" />
        </Link>
      </div>

      <h1 className="site-title">Primary</h1>
    </div>
    <div className="nav-holder">
      <div role="navigation" className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button 
                type="button"
                data-toggle="collapse"
                data-target="#nav-links"
                aria-expanded="false"
                className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="nav-links">
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" activeClassName="active">
                    About Us
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
