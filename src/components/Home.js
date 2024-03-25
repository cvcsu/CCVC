import React, { useState, useEffect } from 'react';
import CCVCLogoVideo from '../assets/LogoAniFast3.mp4'; // Update the import to use your .mp4 file
import './Home.css';

const loveto = ["join AI competitions", "learn about computer vision", "build cool projects"];

const Home = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(prevItem => (prevItem + 1) % loveto.length);
    }, 2000); // Change the item every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h1>
        <span className="highlight">C</span>lub <span className="highlight">C</span>omputer <span className="highlight">V</span>ision at <span className="highlight">C</span>SU
      </h1>
      <h3><i>Visionaries beyond Future</i></h3>
      
      <video src={CCVCLogoVideo} className="home-svg" autoPlay muted loop playsInline>
        Your browser does not support the video tag.
      </video>

      <h2 className='h2-text'>Please contact us if you love to</h2>
      <h2 key={currentItem} className="love-to-item"><i>{loveto[currentItem]}</i></h2>
      <div className="email-contact">
        <span className='contact_us'>Contact us:</span> <a href="mailto:computervisionclub.csu@gmail.com">computervisionclub.csu@gmail.com</a>
      </div>
    </div>
  );
}

export default Home;
