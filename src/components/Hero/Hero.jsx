import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Harsh Shah</h1>
        <p>Master’s Data Scientist skilled in machine learning, data engineering, and analytics.</p>
        <a href="#projects" className="hero-cta">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;