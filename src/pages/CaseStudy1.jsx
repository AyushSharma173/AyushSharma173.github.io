// src/pages/CaseStudy1.jsx
import React from 'react';
import './CaseStudy.css'; // Create corresponding CSS for styling

const CaseStudy1 = () => {
  return (
    <div className="case-study-container">
      <h1>Volatility Modeling in Options Trading</h1>
      <p className="date">August 15, 2025</p>
      <img src="/assets/options.jpg" alt="Volatility Modeling" className="case-study-image" />
      <section className="case-study-content">
        <h2>Project Overview</h2>
        <p>
          In this project, I delved into the stochastic processes behind volatility,
          exploring how changes in implied volatility impact option prices. By utilizing
          advanced statistical models and machine learning techniques, I was able to
          predict volatility trends with increased accuracy.
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>NumPy & Pandas</li>
          <li>Scikit-learn</li>
          <li>Matplotlib & Seaborn</li>
        </ul>
        <h2>Key Features</h2>
        <ul>
          <li>Developed a predictive model for implied volatility</li>
          <li>Visualized volatility trends and their impact on option pricing</li>
          <li>Implemented backtesting to evaluate model performance</li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          The volatility modeling project provided deep insights into the dynamics of
          options trading. The models developed can serve as valuable tools for traders
          seeking to make informed decisions based on volatility predictions.
        </p>
        <a href="https://github.com/AyushSharma173/volatility-modeling" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      </section>
    </div>
  );
};

export default CaseStudy1;
