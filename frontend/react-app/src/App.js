import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

// IMPORTING PAGES
import HomePage from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Write from "./pages/Write";
import Page404 from "./pages/404";

// IMPORTING COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
class App extends Component {
  state = {
    allCategories: ["DIY Chinese Take out", "Cooking basics", "Breakfask/Brunch", "Quick and easy", "Meat-free"]
  }
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
  componentDidMount() {
    headerScroll()
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
        <ScrollToTop>
          <Header themetoggler={this.themetoggler} categories={this.state.allCategories}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={
                <HomePage />
              } />
              <Route path="/category">
                <Route path=":categoryName" element={<Categories categories={this.state.allCategories} />} />
              </Route>
              <Route path="/about" element={
                <About />
              } />
              <Route path="/contact-us" element={
                <ContactUs />
              } />
              <Route path="/write-for-us" element={
                <Write />
              } />
              <Route path="*" element={
                <Page404 />
              } />
            </Routes>
          </div>
          <Footer />
        </ScrollToTop>
      </Router >
    );
  }
}

export default App;


function headerScroll() {
  window.onscroll = function () { myFunction() };

  var header = document.getElementById("site-header");
  var body = document.querySelector(".container");
  var sticky = header.offsetTop;
  function myFunction() {
    console.log('function invoked');
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
      body.style.paddingTop = header.getBoundingClientRect().height + 'px'
      console.log('added');
    } else {
      header.classList.remove("sticky");
      body.style.paddingTop = null
      console.log('removed');
    }
  }
}