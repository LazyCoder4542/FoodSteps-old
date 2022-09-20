import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header id="site-header">
        <div className="wrapper1">
          <div className="icon">
            <img src="icons/logo.svg" alt="logo" />
          </div>
          <ToggleTheme handleClick={this.props.themetoggler} />
        </div>
        <div className="wrapper2">
          <Search />
          <div className="menu">
            <div className="hamburger">icon</div>
            <div className="header-nav">
              <nav>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </nav>
              <nav>
                <NavLink to="/categories">Categories</NavLink>
              </nav>
              <nav>
                <NavLink to="/about">About</NavLink>
              </nav>
              <nav>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </nav>
              <nav>
                <NavLink to="/write-for-us">Write for us</NavLink>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <div className="search-box">
          <span></span>
          <span>
            <input
              type="text"
              name="blog-search"
              id="blog-search"
              placeholder="search"
            />
          </span>
        </div>
        <div className="search-results"></div>
      </div>
    );
  }
}
function ToggleTheme(props) {
  return (
    <div className="toggle-theme" onClick={props.handleClick}>
      <span>
        <img src="icons/theme-dark.svg" alt="theme-icon" className="light" />
        <img src="icons/theme-light.svg" alt="theme-icon" className="dark" />
      </span>
    </div>
  );
}
export default Header;
