import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="site-header">
        <div className="icon">
          <img src="icons/logo.svg" alt="logo" />
        </div>
        <Search />
        <ToggleTheme />
        <div className="header-nav">
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Home
            </NavLink>
          </nav>
          <nav>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Categories
            </NavLink>
          </nav>
          <nav>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              About
            </NavLink>
          </nav>
          <nav>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Contact Us
            </NavLink>
          </nav>
          <nav>
            <NavLink
              to="/write-for-us"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Write for us
            </NavLink>
          </nav>
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
function ToggleTheme() {
  return (
    <div className="toggle-theme">
      <span>
        <img src="icons/theme-dark.svg" alt="theme-icon" />
        <img src="icons/theme-light.svg" alt="theme-icon" />
      </span>
    </div>
  );
}
export default Header;
