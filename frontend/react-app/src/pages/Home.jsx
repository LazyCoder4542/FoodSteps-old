import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Home.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <section id="hero">
        <img
          src="images/hero-mobile.png"
          className="hero hero-mobile"
          alt="hero"
        />
        <img
          src="images/hero-desktop.png"
          className="hero hero-desktop"
          alt="hero"
        />
        <img src="images/spin.png" className="spin" alt="" />
        <header>
          <h1>
            <span>Cooking</span> <span>Made</span> <span>Easier</span>
          </h1>
        </header>
        <p className="tagline">
          <img src="icons/logo.svg" alt="logo" />
        </p>
      </section>
    );
  }
}

export default HomePage;
