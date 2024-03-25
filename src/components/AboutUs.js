import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-container">
        <img src={`${process.env.PUBLIC_URL}/img/group_photo.jpg`} alt="Group_Photo" className="group_photo"/>
        <h1>
          <span className="highlight">C</span>lub <span className="highlight">C</span>omputer <span className="highlight">V</span>ision at <span className="highlight">C</span>SU
        </h1>
        <p>Our mission is to create an inclusive environment that bridges the gap between academia and practical application in computer vision. By hosting regular competitions every semester, we provide an opportunity for both CSU students and external participants to engage, learn, and excel in computer vision technologies.</p>
        <h2>Our meeting</h2>
        <p>Every Friday at 3:00 PM in the Computer Science Building, Room 210.</p>
      </div>
    </div>
  );
}

export default AboutUs;
