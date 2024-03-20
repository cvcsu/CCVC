// CompetitionDetail.js

import React from 'react';
import { useParams } from "react-router-dom";

const CompetitionDetail = () => {
  let { semester } = useParams();
  semester = semester.charAt(0).toUpperCase() + semester.slice(1); // Capitalize the first letter

  // Fetch competition details based on the semester or display static content

  return (
    <div>
      <h2>Competition Details for {semester}</h2>
      {/* Competition details go here */}
    </div>
  );
};

export default CompetitionDetail;
