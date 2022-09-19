import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import HomePage from "./pages/Home";
import Page404 from "./pages/404";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={
            <Page404 />
          } />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
