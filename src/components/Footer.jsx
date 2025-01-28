// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Create corresponding CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ayush Sharma. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/AyushSharma173" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/ayush" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:ayush@example.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
