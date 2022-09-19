import React, { Component } from "react";

class Header extends Component {
  state = {
    currentPage: this.props.page,
  };
  render() {
    return (
      <header id="site-header">
        <h1>Header</h1>
        <p>{this.state.currentPage}</p>
      </header>
    );
  }
}

export default Header;
