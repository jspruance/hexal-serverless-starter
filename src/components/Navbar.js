import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="timeismoney.png" width="30" height="100" alt="hexal logo" /><strong>Status-Pro</strong>&reg;
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Courier
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/register" className="button is-info">
                  <strong>Sign up</strong>
                </a>
                <a href="/login" className="button is-light">
                  Log in
                </a>
              </div><br />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
