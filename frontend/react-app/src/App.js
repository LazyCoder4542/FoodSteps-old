import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import './App.css';
import HomePage from "./pages/Home";
import Page404 from "./pages/404";
import Header from "./components/Header";
function App() {
  //var theme = useState(localStorage.getItem('userTheme') ? localStorage.getItem('userTheme') : 'light', setTheme)
  return (
    <Router>
      <Header />
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

export default App;
