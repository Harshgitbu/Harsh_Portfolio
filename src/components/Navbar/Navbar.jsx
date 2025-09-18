import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('hero');

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  // Optional: Update active on scroll
  useEffect(() => {
    const onScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      let scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {['hero', 'about', 'projects', 'experience', 'skills', 'contact'].map((section) => (
          <li key={section}>
            <button
              className={active === section ? 'active' : ''}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
