import React, { Component } from "react";

import "./Home.css";
class HomePage extends Component {
  state = {};
  componentDidMount() {
    var time = 100000
    var members = document.querySelector('.team');
    members.style.animationDuration = `${time}ms`;
    var membersClone = members.cloneNode('true');
    membersClone.classList.add('copy');
    members.parentElement.appendChild(membersClone);
    members.style.animationName = 'slide';
    membersClone.style.animationName = 'slide';
    membersClone.style.animationDelay = `${time / 2}ms`;
  }
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
              <div className="mini-post">
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
              <div className="mini-post">
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
          <div className="wrapper1">
            <div className="post-cards">
              <div className="mini-post">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus sed eveniet harum illo omnis quam aut atque quae quas, quis accusamus nemo nobis odio vero laudantium placeat explicabo facere a deserunt quo sit, expedita quia tempore?
                  </p>
                  <div className="post-author">
                    BY:&nbsp;<span className="author">Food Arts</span>
                  </div>
                  <div className="interactions">
                    <nav>
                      <a className="link" href="_blank">
                        Read More
                      </a>
                    </nav>
                    <div className="like">
                      <span className="post-like-count">300</span>
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
              <div className="mini-post">
                <div className="post-img">
                  <img src="images/test1.png" alt="" />
                </div>
                <div className="post-details">
                  <h2 className="post-title">How to Cook</h2>
                  <p className="post-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem delectus sed eveniet harum illo omnis quam aut atque quae quas, quis accusamus nemo nobis odio vero laudantium placeat explicabo facere a deserunt quo sit, expedita quia tempore?
                  </p>
                  <div className="post-author">
                    BY:&nbsp;<span className="author">Food Arts</span>
                  </div>
                  <div className="interactions">
                    <nav>
                      <a className="link" href="_blank">
                        Read More
                      </a>
                    </nav>
                    <div className="like">
                      <span className="post-like-count">300</span>
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
          <div className="wrapper2">
            <div className="popular-links">
              <nav>
                <a href="#" className="link">
                  <h3>Is Beans Protein or Carbohydrate?</h3>
                </a>
              </nav>
              <nav>
                <a href="#" className="link">
                  <h3>Is Beans Protein or Carbohydrate?</h3>
                </a>
              </nav>
              <nav>
                <a href="#" className="link">
                  <h3>Is Beans Protein or Carbohydrate?</h3>
                </a>
              </nav>
              <nav>
                <a href="#" className="link">
                  <h3>Is Beans Protein or Carbohydrate?</h3>
                </a>
              </nav>
              <nav>
                <a href="#" className="link">
                  <h3>Is Beans Protein or Carbohydrate?</h3>
                </a>
              </nav>
            </div>
          </div>
        </section>
        <section id="team">
          <header>
            <h1>Meet the team</h1>
          </header>
          <div className="wrapper">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos magnam ex, ducimus atque molestiae ullam inventore ea quam recusandae fugit, odit soluta? Nulla aliquid quos doloribus impedit, dolorem ratione?...
              </p>
            </div>
            <div className="team-slider">
              <div className="team">
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="AZdesignUX"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>AZdesignUX</h3>
                    </span>
                    <span>
                      <p>Product Designer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Genevieve Ikechukwu"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Genevieve Ikechukwu</h3>
                    </span>
                    <span>
                      <p>Backend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Nectuzzy"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Nectuzzy</h3>
                    </span>
                    <span>
                      <p>Backend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Oredein Oluwatoyin"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Oredein Oluwatoyin</h3>
                    </span>
                    <span>
                      <p>Frontend Developer, <span>Team Lead</span></p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Funsho Akinbile"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Funsho Akinbile</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Fadare Adeola"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Fadare Adeola</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Abioye Kehinde"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Abioye Kehinde</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Adewole Mohammed"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Adewole Mohammed</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Marian Nwoke"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Marian Nwoke</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Nnenna Odo"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Nnenna Odo</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Owen Adoga"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Owen Adoga</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
                  </div>
                </div>
                <div className="team-member">
                  <div className="profile-pic">
                    <img className="fit" src="images/test1.png" alt="Tolu Ajao"/>
                  </div>
                  <div className="details">
                    <span>
                      <h3>Tolu Ajao</h3>
                    </span>
                    <span>
                      <p>Frontend Developer</p>
                    </span>
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
