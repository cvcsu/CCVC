import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Spring24.css';

const Spring24 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/SampleCompetitionData.csv');
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setData(rows);
    }
    fetchData();
  }, []);

  const isCenterAligned = (index) => {
    // Define the column indexes that should be center aligned
    const centerAlignedColumns = [0, 2, 3];
    return centerAlignedColumns.includes(index);
  };

  return (
    <div className='competition_info'>
      <h2>Spring 24 Competition: CSU Building Classification</h2>
      <h3>Date: April 1st - April 28th 11:59:59 PM</h3>
      <p>We collected N buildings in CSU for you! In this competition, you need to build a model can classify the building well. Please check more details about the building image data, metric, submission, and restriction below: </p>
      <h3>Competition Details</h3>
      <p><b>Building Image Data:</b></p>
        <ul>
            <li>Images for N number of buildings</li>
            <li>1,000 images per building</li>
            <li>Total N images; N GB</li>
        </ul>
      <p><b>Metric:</b></p>
        <ul>
            <li>Accuracy (Please check )</li>
        </ul>




      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((header, index) => (
              <th key={index} style={{ textAlign: isCenterAligned(index) ? 'center' : 'left' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((val, colIndex) => (
                <td key={colIndex} style={{ textAlign: isCenterAligned(colIndex) ? 'center' : 'left' }}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className='update_msg'>Last update: Mar 18, 23:59:00 </h4>
    </div>
  );
}

export default Spring24;