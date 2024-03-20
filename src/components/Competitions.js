// Competitions.js

import React from 'react';
import { Link } from "react-router-dom";

const semesters = ["Spring 24", "Fall 24", "Spring 25"]; // Add more semesters as needed

const Competitions = () => {
  return (
    <div>
      <h2>Competitions</h2>
      <ul>
        {semesters.map((semester) => (
          <li key={semester}>
            <Link to={`/competitions/${semester.replace(" ", "").toLowerCase()}`}>{semester}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Competitions;
