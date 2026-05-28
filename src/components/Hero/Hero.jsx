// ==============================
// HERO.JSX
// ==============================

import React, { useEffect, useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

import resumePdf from './resume.pdf';
import profileImage from './Linkedin_pro.jpg';

import './Hero.css';

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaArrowDown
} from 'react-icons/fa';

const texts = [
  'AI Engineer',
  'MLOps Specialist',
  'RAG Systems Architect',
  'Data Scientist',
  'Production AI Engineer'
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, subIndex + 1));
        setSubIndex(prev => prev + 1);

        if (subIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypedText(currentText.substring(0, subIndex - 1));
        setSubIndex(prev => prev - 1);

        if (subIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, currentIndex, isDeleting]);

  const scrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth' });
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
    <section id="hero" className="hero">
      <SectionWrapper className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Harsh Shah</h1>

            <p className="hero-subtitle">
              AI Engineer | MLOps Specialist | Data Scientist
            </p>

            <div className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </div>

            <div className="hero-buttons">
              <button
                className="hero-button"
                onClick={scrollToProjects}
                aria-label="View Projects"
              >
                <FaArrowDown />
                View My Work
              </button>

              <button
                className="hero-button secondary"
                onClick={downloadResume}
                aria-label="Download Resume"
              >
                <FaFileDownload />
                Download Resume
              </button>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Harshgitbu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/harsh612/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:harshtemp612@gmail.com"
                className="social-link"
                aria-label="Send Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={profileImage}
              alt="Harsh Shah"
              className="profile-image"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Hero;