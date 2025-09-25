import React from 'react';
import './Navbar.css';

const Navbar = ({ onSectionFocus }) => {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {sections.map((section) => (
          <li key={section}>
            <button onClick={() => onSectionFocus(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;