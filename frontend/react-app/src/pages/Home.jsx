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
                  <h2 className="post-title">How to Make Soup</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    BY:&nbsp;<span className="author">John Louis</span>
                  </div>
                  <div className="interactions">
                    <nav>
                      <a className="link" href="_blank">
                        Read More
                      </a>
                    </nav>
                    <div className="like">
                      <span className="post-like-count">27</span>
                      <span className="svg-wrapper">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Make Soup</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, nobis!
                  </p>
                  <div className="post-author">
                    BY:&nbsp;<span className="author">John Louis</span>
                  </div>
                  <div className="interactions">
                    <nav>
                      <a className="link" href="_blank">
                        Read More
                      </a>
                    </nav>
                    <div className="like">
                      <span className="post-like-count">27</span>
                      <span className="svg-wrapper">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
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
                    BY:&nbsp;<span className="author">Food Arts</span>
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
                    BY:&nbsp;<span className="author">Food Arts</span>
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
