import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Overlay from "./Overlay";

import logo from "../assets/images/logo.svg";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import dropdown from "../assets/icons/dropdown.svg";
class Header extends Component {
  state = {
    menuOpen: false,
    categoriesdropdown: false,
  };
  render() {
    return (
      <React.Fragment>
        <header id="site-header">
          <Overlay
            hidden={!this.state.menuOpen}
            onClick={() => {
              let elem = document
                .querySelector("#site-header")
                .querySelector(".menu");
              elem.classList.remove("active");
              this.setState({
                menuOpen: false,
              });
            }}
          />
          <div className="wrapper1">
            <div className="icon">
              <img src={logo} alt="logo" />
            </div>
            <Search />
            <ToggleTheme handleClick={this.props.themetoggler} />
          </div>
          <div className="wrapper2">
            <div className="menu">
              <div
                className="hamburger svg-wrapper"
                onClick={() => {
                  let elem = document
                    .querySelector("#site-header")
                    .querySelector(".menu");
                  elem.classList.add("active");
                  this.setState({
                    menuOpen: true,
                  });
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z"
                    stroke="#17181C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z"
                    stroke="#17181C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z"
                    stroke="#17181C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z"
                    stroke="#17181C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="header-nav"
                onClick={(e) => {
                  if (e.target.tagName === "A") {
                    document
                      .querySelector("#site-header")
                      .querySelector(".menu")
                      .classList.remove("active");
                    this.setState({
                      menuOpen: false,
                    });
                  }
                }}
              >
                <div
                  className="close"
                  onClick={() => {
                    let elem = document
                      .querySelector("#site-header")
                      .querySelector(".menu");
                    elem.classList.remove("active");
                    this.setState({
                      menuOpen: false,
                    });
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 15.5L15.5 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 15.5L8.5 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="wrapper">
                  <div className="icon">
                    <img src={logo} alt="logo" />
                  </div>
                  <Search />
                  <ul>
                    <li>
                      <NavLink to="/" end>
                        Home
                      </NavLink>
                    </li>
                    <li className={`categories ${this.state.categoriesdropdown ? "dropped-down" : ""}`} onClick={() => {if (this.state.categoriesdropdown) {this.setState({categoriesdropdown: false})} else {this.setState({categoriesdropdown: true})}}}>
                      <div>
                        <span>Categories</span>
                        <span>
                          <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10.5 10.5L20 1" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </span>
                      </div>
                      {this.props.categories
                      ? (<ul>
                        {this.props.categories.map((itm, id) => {
                          return (<li key={id + 1}><NavLink to={`/category/${encodeURIComponent(itm)}`}>{itm}</NavLink></li>)
                        })}
                      </ul>)
                      : null
                      }
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/write-for-us">Write for us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Search />
          </div>
        </header>
      </React.Fragment>
    );
  }
}
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <div className="search-box">
          <span>
            <input
              type="text"
              name="blog-search"
              className="blog-search"
              placeholder="search"
            />
          </span>
          <span className="svg-wrapper">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                fill="#858688"
              />
              <path
                d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z"
                fill="#858688"
              />
            </svg>
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
        <img src={moon} alt="theme-icon" className="light" />
        <img src={sun} alt="theme-icon" className="dark" />
      </span>
    </div>
  );
}
export default Header;
