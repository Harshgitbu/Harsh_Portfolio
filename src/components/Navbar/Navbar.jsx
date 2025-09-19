import React from 'react';
import './Navbar.css';

const Navbar = ({ onSectionFocus, activeSection }) => {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <nav className={`navbar ${activeSection ? 'scrolled' : ''}`}>
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {sections.map((section) => (
          <li key={section}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => onSectionFocus(section)}
              aria-current={activeSection === section ? 'page' : undefined}
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
