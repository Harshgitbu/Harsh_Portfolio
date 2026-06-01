import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-logo">HS/</div>
      <p className="footer-copy">
        Built with <span>♥</span> by Harsh Shah · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
