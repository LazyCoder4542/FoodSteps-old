import React, { Component} from "react";

import "./Write.css";
class Write extends Component {
  state = {  } 
  componentDidMount() {
    const passwordFields = document.querySelectorAll(".password-container");
    passwordFields.forEach(passwordField => {
      passwordField.addEventListener("click", e => {
        console.log('hello');
        console.log(e.target.classList)
        if (e.target.classList.contains('show')) {
          if (passwordField.querySelector('input').getAttribute("type") === "text") {
            console.log('hello');
            passwordField.querySelector('input').setAttribute("type", "password")
          }
          else {
            passwordField.querySelector('input').setAttribute("type" ,"text")
          }
        }
      })
    })
  }
  render() { 
    return (
      <React.Fragment>
        <section id="page-form">
          <header>
            <h1>Write for us</h1>
          </header>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex dolor excepturi iusto fugaassumenda, magni ea? Tempora provident ducimus eius reprehenderit ipsam consequuntur inciduntveniam. Omnis quo voluptates sequi!</p>
          <form action="" method="POST">
            <div className="form">
              <div className="form-group"><input type="text" name ="name" placeholder="Tell us your name" /></div>
              <div className="form-group"><input type="email" name="email" id="" placeholder="What's your email address" /></div>
              <div className="password-container form-group">
                <input type="password" name="password" className="password" placeholder="Your password" />
                <img className="show" src="./icons/eye.svg" alt="eye-icon" />
              </div>
              <div className="password-container form-group">
                <input type="password" name="confirm-password" className="password" placeholder="Confirm your password" />
                <img className="show" src="./icons/eye.svg" alt="eye-icon" />
              </div>
              <button className="btn" type="submit" value="">Become an Author</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  };
}

export default Write;
