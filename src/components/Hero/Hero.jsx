import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const roles = [
  'AI Engineer',
  'MLOps Specialist',
  'RAG Systems Architect',
  'Data Scientist',
  'Production AI Builder',
];

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(cur.slice(0, charIdx + 1));
        setCharIdx(p => p + 1);
        if (charIdx === cur.length) setTimeout(() => setDeleting(true), 1600);
      } else {
        setTyped(cur.slice(0, charIdx - 1));
        setCharIdx(p => p - 1);
        if (charIdx === 0) {
          setDeleting(false);
          setRoleIdx(p => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIdx, roleIdx, deleting]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero section">
      <div className="hero-bg-num">AI</div>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-label">Available for opportunities</p>
          <h1 className="hero-name">
            Harsh<br /><span className="accent">Shah</span>
          </h1>

          <div className="hero-role">
            <span className="prompt">~/</span>
            {typed}
            <span className="cursor-blink" />
          </div>

          <p className="hero-bio">
            AI Engineer with 4+ years turning cutting-edge ML research into
            production systems. I build RAG pipelines, MLOps infrastructure, and
            real-time analytics that scale — currently at One Park Financial.
          </p>

          <div className="hero-stats">
            <div>
              <span className="hero-stat-num">4+</span>
              <span className="hero-stat-label">Years Exp</span>
            </div>
            <div>
              <span className="hero-stat-num">8+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div>
              <span className="hero-stat-num">30K+</span>
              <span className="hero-stat-label">Users Served</span>
            </div>
            <div>
              <span className="hero-stat-num">83%</span>
              <span className="hero-stat-label">Mem Reduction</span>
            </div>
          </div>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              <FaArrowDown /> View My Work
            </button>
            <a className="btn-ghost" href="#" download="Harsh_Shah_Resume.pdf">
              <FaFileDownload /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Harshgitbu" target="_blank" rel="noopener noreferrer" className="hero-social">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/harsh612/" target="_blank" rel="noopener noreferrer" className="hero-social">
              <FaLinkedin />
            </a>
            <a href="mailto:harshtemp612@gmail.com" className="hero-social">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <img src="/Linkedin_pro.jpg" alt="Harsh Shah" className="profile-img" />
            <div className="profile-badge">
              <div className="badge-dot" />
              <span className="badge-text">Open to work</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
};

export default Hero;
