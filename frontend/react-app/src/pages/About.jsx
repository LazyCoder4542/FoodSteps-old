import React from "react";

import { Team } from "./Home";
import "./About.css"
function About() {
  return (
    <React.Fragment>
      <section id="about">
        <header>
          <h1>About Us</h1>
        </header>
        <div className="middle_text">
          <p>Our Story from Start to Success</p>
        </div>
        <div className="second_middle">
          <img src="images/FoodSteps.png" alt="foodstep image" className="logo__one" />
          <h1>By</h1>
          <img src="images/logo546546 1.png" alt="logo" className="logo__two" />
        </div>
      </section>
      <Team />
    </React.Fragment>
  );
}

export default About;
