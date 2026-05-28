import React, { useEffect, useState } from 'react';
import './Navbar.css';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ onSectionFocus }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sections.find(section => {
        const element = document.getElementById(section.id);

        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">Harsh Shah</div>

      <ul className="navbar-links">
        {sections.map(section => (
          <li key={section.id}>
            <button
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => onSectionFocus(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;