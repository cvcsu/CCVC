import React, { useState, useEffect } from 'react';
import CCVCLogo from '../assets/logo.png';
import './Home.css';

const loveto = ["join AI competitions", "learn about computer vision", "build cool projects"];

const AboutUs = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(prevItem => (prevItem + 1) % loveto.length);
    }, 3000); // Change the item every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1>Club Computer Vision at CSU</h1>
      <h3>“Prediction is the essence of intelligence” - Yann LeCun</h3>
      <img src={CCVCLogo} alt="Club Logo" className="home-svg"/>
      <h2 className='h2-text'>Please contact us if you love to</h2>
      <h2 key={currentItem} className="love-to-item">{loveto[currentItem]}</h2>
      <div className="email-contact">
        Contact us: <a href="mailto:contact@example.com">computervisioncsu@gmail.com</a>
      </div>
    </div>
  );
}

export default AboutUs;
