// src/pages/CaseStudy2.jsx
import React from 'react';
import './CaseStudy.css'; // Reuse the same CSS for consistency

const CaseStudy2 = () => {
  return (
    <div className="case-study-container">
      <h1>Physics + Machine Learning: Particle Detection</h1>
      <p className="date">July 10, 2025</p>
      <img src="/assets/physics-ml.jpg" alt="Particle Detection" className="case-study-image" />
      <section className="case-study-content">
        <h2>Project Overview</h2>
        <p>
          This project combines the principles of physics and machine learning to detect and classify
          subatomic particles from large-scale physics experiments. By leveraging convolutional neural
          networks, the system can accurately identify particle types based on their interaction patterns.
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>TensorFlow & Keras</li>
          <li>OpenCV</li>
          <li>Jupyter Notebooks</li>
        </ul>
        <h2>Key Features</h2>
        <ul>
          <li>Implemented image preprocessing techniques for particle data</li>
          <li>Developed and trained a CNN model for particle classification</li>
          <li>Integrated real-time detection with high accuracy</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          The integration of machine learning with physics data processing significantly enhances
          the efficiency and accuracy of particle detection. This project demonstrates the potential
          of interdisciplinary approaches in solving complex scientific challenges.
        </p>
        <a href="https://github.com/AyushSharma173/particle-detection" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </section>
    </div>
  );
};

export default CaseStudy2;
