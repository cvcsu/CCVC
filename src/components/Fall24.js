import React from 'react';
import './Fall24.css';

const Fall24 = () => {

  return (
    <div className='competition_info'>
      <h2>Fall 24 Competition: CSU Building Classification</h2>
      <img src={`${process.env.PUBLIC_URL}/img/Computer_Science.png`} alt="Group_Photo" className="group_photo"/>
      <h3>Date: October 1st - October 31st 11:59:59 PM in MDT</h3>
      <p>We collected building images in CSU for you! In this competition, you need to build a model can classify the building well. Please check more details about the building image data, metric, submission, and restriction below: </p>
      <h3>Competition Details</h3>
      <p><b>Metrics</b></p>
        <ul>
            <li>Accuracy - Please check the <i>Accuracy</i> section in [<a className='weblink' href=""><b>TBD</b></a>]</li>
            <li>Inference Time - If accuracies are tied, then the fastest method will go higher rank. Please check the <i>Inference Time</i> section in [<a className='weblink' href=""><b>TBD</b></a>]</li>
        </ul>
      <p><b>Code Template</b></p>
        <ul>
            <li>Training & Testing on <i>ResNet18</i> (PyTorch): [<a className='weblink' href=""><b>TBD</b></a>]</li>
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
            <li>1st Place: Certificates & TBD</li>
            <li>2nd Place: Certificates & TBD</li>
            <li>3rd Place: Certificates & TBD</li>
            <li>All awardees are hereby requested to prepare and deliver a presentation, not exceeding ten minutes, outlining their methodologies. This session is scheduled to take place in <b>TBD</b>.</li>
        </ul>
      <p><b>Submission</b></p>
        <ul>
            <li>Please check our private competition link in Kaggle: TBD (It will be released Oct 1st 12:00 AM in MDT)</li>
            <li>Deadline: October 31st 11:59:59 PM in MDT</li>
        </ul>
      <h4 className='contact_us'>Please contact us if you have any technical issues <a href="mailto:computervisionclub.csu@gmail.com">computervisionclub.csu@gmail.com</a></h4>
    </div>
  );
}

export default Fall24;