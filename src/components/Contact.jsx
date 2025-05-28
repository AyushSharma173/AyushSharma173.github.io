import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-icons">
        <a
          href="mailto:ayush.psr@gmail.com"
          aria-label="Email"
          className="contact-icon"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/AyushSharma173"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="contact-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ayush-sharma-378a15156/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/ayush_psr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="contact-icon"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
