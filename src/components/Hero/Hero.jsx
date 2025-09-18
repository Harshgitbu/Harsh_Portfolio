import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${visible ? 'visible' : ''}`} id="hero" aria-label="Introduction section">
      <div className="hero-container">
        <h1 className="hero-title">Harsh Shah</h1>
        <p className="hero-subtitle">
          Master’s Candidate in Data Science &nbsp;|&nbsp;  
          Machine Learning, Data Engineering & Analytics Specialist
        </p>
        <a href="#projects" className="hero-button" tabIndex={0}>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
