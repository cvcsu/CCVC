// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Roster from "./components/Roster";
import Competitions from "./components/Competitions";
import Spring24 from "./components/Spring24";
import "./navStyles.css";

function App() {
  return (
    <Router basename="/CCVC">
      <nav className="navigation">
        <Link to="/">Home</Link> | 
        <Link to="/about-us">About Us</Link> | 
        <Link to="/roster">Roster</Link> | 
        <div className="dropdown">
          <button className="dropbtn">Competitions</button>
          <div className="dropdown-content">
            <Link to="/competitions/Spring24">Spring 24</Link>
            {/* <Link to="/competitions/Fall24">Fall 24</Link>
            <Link to="/competitions/Spring25">Spring 25</Link> */}
            {/* Add more semesters as needed */}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competitions/Spring24" element={<Spring24 />} />
        {/* <Route path="/competitions/:semester" element={<CompetitionDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
