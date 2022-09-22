import React, { Component } from "react";

import "./Home.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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
        <section id="featured">
          <header>
            <h1>Featured Posts</h1>
          </header>
          <div className="wrapper">
            <div className="post-cards">
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="popular">
          <header>
            <h1>Popular Posts</h1>
          </header>
          <div className="wrapper">
            <div className="post-cards">
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team">
          <header>
            <h1>Meet the team</h1>
          </header>
          <div className="wrapper">
            <div className="post-cards">
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    By&nbsp;<span className="author">Food Arts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
