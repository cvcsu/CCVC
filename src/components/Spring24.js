import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Spring24.css';

const Spring24 = () => {
  const [data, setData] = useState([]);

  const publishedSheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMe-pjOMtzNOd45-Qkp8eJMUUCLmguHdFJ9NfCGUxfE0-TddLGFhu_pJI89C0q0gLoaCbPodVpmmqj/pub?output=csv'

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(publishedSheetUrl);
        if (!response.ok) throw new Error('Network response was not ok.');
        const text = await response.text();
        const results = Papa.parse(text, { header: true });
        setData(results.data);
      } catch (error) {
        console.error("There was a problem fetching the data: ", error);
      }
    }
    fetchData();
  }, []);

  const isCenterAligned = (index) => {
    // Define the column indexes that should be center aligned
    const centerAlignedColumns = [0, 2, 3, 4];
    return centerAlignedColumns.includes(index);
  };

  const buildingLabels = {
    0: 'Computer Science',
    1: 'Lory Student Center',
    2: 'Morgan Library',
    3: 'Moby Arena',
    4: 'Stadium',
    5: 'Student Recreation Center',
    6: 'Admin',
    7: 'Engineering',
    8: 'Behavioral Sciences',
    9: 'Clark Building',
    10: 'Rockwell Hall',
    11: 'Guggenheim',
    12: 'Statistics',
    13: 'Weber',
    14: 'Animal Sciences'
  };

  return (
    <div className='competition_info'>
      <h2>Spring 24 Competition: CSU Building Classification</h2>
      <h3>Date: April 1st - April 28th 11:59:59 PM</h3>
      <p>We collected 15 buildings in CSU for you! In this competition, you need to build a model can classify the building well. Please check more details about the building image data, metric, submission, and restriction below: </p>
      <h3>Competition Details</h3>
      <p><b>CSU Building Image Data</b></p>
        <ul>
            <li>Images for 15 buildings</li>
            <li>1,000 images per building</li>
            <li>Image size: 512x512</li>
            <li>Total 15,000 images; 10.95 GB</li>
            <li><b>Building Labels:</b>
              <ul>
                {Object.keys(buildingLabels).map((key, index) => (
                    <li key={index}><b>{key}</b>: {buildingLabels[key]}</li>
                  ))}
              </ul>
            </li>
            <li>To download our dataset, please copy the text in this link and send it us an email. Ensure to fill in the [DATE] and [YOUR TEAM NAME] placeholders with the relevant details. Then, the download link will be sent: [<a className='weblink' href="https://drive.google.com/file/d/1G8NOLaN6wy_Qo4J6SSX_0DQqNPwdp2sq/view?usp=sharing"><b>Link</b></a>]</li>
        </ul>
      <p><b>Metrics</b></p>
        <ul>
            <li>Accuracy - Please check the <i>Accuracy</i> section in [<a className='weblink' href="https://colab.research.google.com/drive/1gej_KJHXfnylK8WtB4HGnqXTdhcX7-Gp?usp=sharing"><b>Code</b></a>]</li>
            <li>Inference Time - If accuracies are tied, then the fastest method will go higher rank. Please check the <i>Inference Time</i> section in [<a className='weblink' href="https://colab.research.google.com/drive/1gej_KJHXfnylK8WtB4HGnqXTdhcX7-Gp?usp=sharing"><b>Code</b></a>]</li>
        </ul>
      <p><b>Code Template</b></p>
        <ul>
            <li>Training & Testing on <i>ResNet18</i> (PyTorch): [<a className='weblink' href="https://colab.research.google.com/drive/1Rr-hRqDNrRLv8H8swLFTDw7rFCLwYovP?usp=sharing"><b>Code</b></a>]</li>
            <li>If you want to play with it:</li>
            <ol>
              <li>Please go "File"</li>
              <li>Click "Save a copy in Drive"</li>
              <li>Open the copied notebook in your Google Cloud Drive</li>
            </ol>
            <li>Please put downloaded data into Google Drive before running the Colab</li>
        </ul>
      <p><b>Restrictions</b></p>
        <ul>
          <li>The data cannot be allowed to use any other proposes except this competition</li>
          <li>Only use the provided building image & label data</li>
          <li>Only use the provided building labels</li>
          <li>Please use our metrics for evaluation</li>
          <li>Training Time: less than 9 hours</li>
          <li>Testing Time: less than 9 hours</li>
          <li>Model Size: less than 200 MB</li>
        </ul>
      <p><b>Winner Prizes</b></p>
        <ul>
            <li>1st Place: TBD</li>
            <li>2nd Place: TBD</li>
            <li>3rd Place: TBD</li>
            <li>All awardees are hereby requested to prepare and deliver a presentation, not exceeding ten minutes, outlining their methodologies. This session is scheduled to take place in <b>CSB 305 on Friday, May 3rd, at 3:00 PM</b>.</li>
        </ul>
      <p><b>Submission</b></p>
        <ul>
            <li>Share your <b>Google Colab notebook</b> and <b>saved model weights</b> to <i>computervisionclub.csu@gmail.com</i>. Then, send corresponding links with full names of your team members to our email: <i>computervisionclub.csu@gmail.com</i></li>
            <li>Please DO NOT CLEAR results in your notebook</li>
            <li>Deadline: April 28th 11:59:59 PM</li>
        </ul>
      <h3>Leaderboard</h3>
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
      <h4 className='contact_us'>Please contact us if you have any technical issues <a href="mailto:computervisionclub.csu@gmail.com">computervisionclub.csu@gmail.com</a></h4>
    </div>
  );
}

export default Spring24;