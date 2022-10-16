import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./404.css";
import img1 from "../assets/images/illustration.png"
class Page404 extends Component {
  state = {  } 
  componentDidMount() {
    this.props.toggleHeadFoot(true)
  }
  componentWillUnmount() {
    this.props.toggleHeadFoot(false)
  }
  render() { 
    return (
      <div className="error-content">
        <div className="error-image">
          <img src={img1} className="img" alt="" />
        </div>
        <div className='error-desc'>        
          <h1 className="error-text--para">
            We couldn't find the page you requested for<br />
          </h1>
          <div className="error-a">
            <p>Go here instead:</p>
            <NavLink to="/" className='link'>Home</NavLink>
            <NavLink to="/contact-us" className='link'>Contact Us</NavLink> 
            <NavLink to="/category/DIY%20Chinese%20Take%20out" className='link'>
              DIY Chinese food
            </NavLink>
          </div>       
        </div>
            
      </div>
    )
  }
}
 
export default Page404;
