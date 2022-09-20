import React, { useState, Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import './App.css';
import HomePage from "./pages/Home";
import Page404 from "./pages/404";
import Header from "./components/Header";
class App extends Component {
  state = {}
  constructor() {
    super()
    if (window.matchMedia) {
      var match = window.matchMedia('(prefers-color-scheme: dark)')
    }
    function toggleDarkMode(state) {
      if (match.matches) {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
      }
      else {
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
      }
    }
    match.addEventListener('change', e => {
      toggleDarkMode(match.matches);
    })
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
      localStorage.setItem('theme', savedTheme);
    }
    else { toggleDarkMode(match.matches); }
  }
  themetoggler = () => {
    var currentTheme = document.documentElement.dataset.theme || 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  }
  render() {
    return (
      <Router>
        <Header themetoggler={this.themetoggler} />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <HomePage />
            </React.Fragment>

          } />
          <Route path="*" element={
            <Page404 />
          } />
        </Routes>
      </Router>
    );
  }
}

export default App;
