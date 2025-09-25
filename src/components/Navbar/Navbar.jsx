import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

  // Handle smooth scroll
  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {sections.map((section) => (
          <li key={section}>
            <button onClick={() => scrollToSection(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
