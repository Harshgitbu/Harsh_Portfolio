import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      setScrolled(scrollPos > 80); // Shrink after 80px scroll
      for (const id of sections) {
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) setActive(id);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">Harsh Shah</div>
      <ul className="navbar-links">
        {sections.map((section) => (
          <li key={section}>
            <button
              className={active === section ? 'active' : ''}
              onClick={() => handleNavClick(section)}
              aria-current={active === section ? 'page' : undefined}
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
