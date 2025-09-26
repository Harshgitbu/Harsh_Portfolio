import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onSectionFocus }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated section names - Changed "Hero" to "Intro"
  const sections = [
    { id: 'hero', label: 'Intro' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {sections.map(section => (
          <li key={section.id}>
            <button onClick={() => onSectionFocus(section.id)}>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;