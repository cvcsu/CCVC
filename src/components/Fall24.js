import React from 'react';
import './Fall24.css';

const Fall24 = () => {

  return (
    <div className='competition_info'>
      <h2>Fall 24 Competition: CSU Building Classification</h2>
      <img src={`${process.env.PUBLIC_URL}/img/f24/Computer_Science.png`} alt="Group_Photo" className="group_photo"/>
      <h3>Date: October 1st - October 31st 11:59:59 PM in MDT</h3>
      <p>We collected building images in CSU for you! In this competition, you need to build a model can classify the building well. Please check more details about the building image data, metric, submission, and restriction below: </p>
      <h3>Competition Details</h3>
      <p><b>Metrics</b></p>
        <ul>
            <li>F1 Score</li>
            <li>Inference Time - If accuracies are tied, then the fastest method will go higher rank.</li>
        </ul>
      <p><b>Code Template</b></p>
        <ul>
            <li>Sample Code Training & Testing on <i>ResNet18</i> (PyTorch): [<a className='weblink' href="https://colab.research.google.com/drive/1I3zIo4hDzjObvuHR1mv5CQeGOzdXE9a_#scrollTo=nijmw9KJm3BJ"><b>Colab Notebook</b></a>]</li>
            <li>More Detailed Code with A Custom Dataset Class (PyTorch): [<a className='weblink' href="https://colab.research.google.com/drive/1Rr-hRqDNrRLv8H8swLFTDw7rFCLwYovP#scrollTo=2hDerEoXenpj"><b>Colab Notebook</b></a>]</li>
        </ul>
      <p><b>Restrictions</b></p>
        <ul>
          <li>The data cannot be allowed to use any other proposes except this competition</li>
          <li>Prebuilt model can be used, but pretrained weights are not allowed</li>
          <li>Only use the provided building image & label data</li>
          <li>Only use the provided building labels</li>
          <li>Please use our metrics for evaluation</li>
          <li>Training Time: less than 9 hours</li>
          <li>Testing Time: less than 9 hours</li>
          <li>Model Size: less than 200 MB</li>
        </ul>
      <p><b>Winner Prizes</b></p>
        <ul>
            <li>1st Place: Certificates & $100</li>
            <li>2nd Place: Certificates</li>
            <li>3rd Place: Certificates</li>
            <li>All awardees are hereby requested to prepare and deliver a presentation, not exceeding ten minutes, outlining their methodologies.</li>
        </ul>
      <p><b>Submission</b></p>
      <ul>
          <li>Please check our private competition link in Kaggle: TBD (It will be released Oct 1st 12:00 AM in MDT)</li>
          <li>Deadline: October 31st 11:59:59 PM in MDT</li>
      </ul>
      <hr></hr>
      <hr></hr>
      <h3>Winners' Ceremony & Last Meeting</h3>
      <p>Thank you for participating in the Fall 24 Competition! We are excited to announce the winners of the competition. The winners are:</p>
      <ul>
          <li>1st Place: <b>Daemon Kerrigan</b> (F1 Score: 0.37)</li>
          <li>2nd Place: <b>Sifatul Anindho</b> (F1 Score: 0.21)</li>
          <li>3rd Place: <b>Caleb Christian</b> (F1 Score: 0.12)</li>
      </ul>
      <img src={`${process.env.PUBLIC_URL}/img/f24/first_winner.png`} alt="First_Winner" className="photo"/>
      <p className='center'><b>The 1st winner: Daemon Kerrigan</b></p>
      <img src={`${process.env.PUBLIC_URL}/img/f24/second_winner.png`} alt="Second_Winner" className="photo"/>
      <p className='center'><b>The 2nd winner: Sifatul Anindho</b></p>
      <img src={`${process.env.PUBLIC_URL}/img/f24/third_winner.png`} alt="Third_Winner" className="photo"/>
      <p className='center'><b>The 3rd winner: Caleb Christian</b></p>
      <hr></hr>
      <h4>The 1st Winner's presentation</h4>
      <img src={`${process.env.PUBLIC_URL}/img/f24/winner_presentation.png`} alt="First_Winner_Presentation" className="photo"/>
      <p className='center'>Daemon explains his approach to achieve the best score</p>
      <h4>Group Photo</h4>
      <img src={`${process.env.PUBLIC_URL}/img/f24/last_meeting.png`} alt="Group_Photo" className="group_photo"/>
      <p className='center'>Thank you for participating as montors and mentees in the Fall 24 Competition!</p>

      <h4 className='contact_us'>Please contact us if you have any technical issues <a href="mailto:computervisionclub.csu@gmail.com">computervisionclub.csu@gmail.com</a></h4>
    </div>
  );
}

export default Fall24;