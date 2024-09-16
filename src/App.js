import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"; // Use HashRouter
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Roster from "./components/Roster";
import Fall24 from "./components/Fall24";
import "./navStyles.css";

function App() {
  return (
    <Router basename="/"> {/* Remove /CCVC if using HashRouter */}
      <nav className="navigation">
        <Link to="/">Home</Link> | 
        <Link to="/about-us">About Us</Link> | 
        <Link to="/roster">Roster</Link> | 
        <div className="dropdown">
          <button className="dropbtn">Competitions</button>
          <div className="dropdown-content">
            <Link to="/competitions/fall24">Fall 24</Link> {/* Ensure consistency in path naming */}
            {/* Uncomment or add other links as necessary */}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/competitions/fall24" element={<Fall24 />} /> {/* Adjusted path */}
        {/* Uncomment or adjust additional routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
