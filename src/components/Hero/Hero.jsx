import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Always make visible after mount
  }, []);

  return (
    <section className={`hero ${visible ? 'visible' : ''}`} id="hero">
      <div className="hero-container">
        <h1 className="hero-title">Harsh Shah</h1>
        <p className="hero-subtitle">
          Master’s Candidate in Data Science &nbsp;|&nbsp;
          Machine Learning, Data Engineering & Analytics Specialist
        </p>
        <a href="#projects" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
