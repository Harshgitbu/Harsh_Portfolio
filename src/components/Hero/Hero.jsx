import React, { useEffect, useState } from 'react'; // Remove useRef import
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import resumePdf from './resume.pdf';
import profileImage from './Linkedin_pro.jpg';
import './Hero.css';

import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [ref, isVisible] = useFadeInOnScroll();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Move texts array inside useEffect to fix the dependency warning
    const texts = [
      "Machine Learning Specialist",
      "Data Engineering Expert", 
      "Big Data Analytics",
      "Cloud Solutions Architect",
      "AI/ML Researcher"
    ];

    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex]); // Remove 'texts' from dependencies

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Harsh_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className={`hero ${visible ? 'visible' : ''} ${isVisible ? 'scroll-visible' : ''}`}
      ref={ref}
    >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Harsh Shah</h1>
            <p className="hero-subtitle">
              Master's Candidate in Data Science at Boston University
            </p>
            <div className="typing-text">
              {typedText}<span className="cursor">|</span>
            </div>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="hero-button">
                <FaArrowDown /> View My Work
              </button>
              <button onClick={downloadResume} className="hero-button secondary">
                <FaFileDownload /> Download Resume
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/Harshgitbu" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/harsh612/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:shahharsh0612@gmail.com" className="social-link">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={profileImage} 
              alt="Harsh Shah" 
              className="profile-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQwIiBjeT0iMTQwIiByPSIxNDAiIGZpbGw9IiMxYTczZTgiLz48dGV4dCB4PSIxNDAiIHk9IjE2MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SFM8L3RleHQ+PC9zdmc+';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;