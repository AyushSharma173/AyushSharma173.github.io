// src/components/CaseStudies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css'; // Ensure you have this CSS file for styling

// Dummy data for demonstration.
// Replace these with your actual case studies/projects.
const caseStudiesData = [
  {
    title: 'Quantamental Volatility Surface Forecasting',
    date: 'August 15, 2025',
    summary: `In this project, I delve into the stochastic processes
               behind volatility, exploring how changes in implied
               volatility impact option prices...`,
    image: '../public/assets/title_image.png',
    link: '/case-studies/volatility-modeling' // Internal route
  },
  // {
  //   title: 'Physics + Machine Learning: Particle Detection',
  //   date: 'July 10, 2025',
  //   summary: `A machine learning approach to detect and classify
  //              subatomic particles from large-scale physics experiments...`,
  //   image: '/assets/physics-ml.jpg',
  //   link: '/case-studies/particle-detection'
  // },
  {
    title: 'Constructing a Quantum Circuit Simulator in Python',
    date: 'February 4, 2025', // Update this to the correct date
    summary: `Developed a Quantum Circuit Simulator in Python capable of executing high-level quantum algorithms,
              including Grover’s search and the Quantum Fourier Transform (QFT). The simulator uses a matrix-free 
              approach for efficient quantum state evolution, allowing users to explore quantum computing concepts 
              interactively.`,
    image: '/assets/quantum-simulator.jpg', // Add a relevant image for your project
    link: '/case-studies/quantum-circuit-simulator'
  },

  
  {
    title: 'AI Powered Meal & Nutrition Tracking',
    date: 'June 5, 2025',
    summary: `Offering easy to use solutions to help people manage their nutrition better...`,
    image: '/assets/pennymeal.jpg',
    link: '/case-studies/pennymeal'
  },
  {
    title: 'Real Estate Market Report Generation',
    date: 'May 20, 2025',
    summary: `Developed a data-driven platform to create in depth, rigorous real estate reports based on real time data, prices, demographics,
               and more...`,
    image: '/assets/realestate.jpg',
    link: '/case-studies/realestate-pricing'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <h2>Featured Projects</h2>
      {/* <p className="text-center mb-8 text-lg text-gray-600">
        Explore a selection of my most impactful projects and case studies.
      </p> */}
      <div className="case-studies-wrapper">
        {caseStudiesData.map((study, index) => (
          <article key={index} className="case-study">
            {/* <img src={study.image} alt={study.title} className="case-study-image" /> */}
            <div className="case-study-content">
              <h3>{study.title}</h3>
              {/* <small className="case-study-date">{study.date}</small> */}
              <p className="case-study-summary">{study.summary}</p>
              <Link to={study.link} className="case-study-link">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;

