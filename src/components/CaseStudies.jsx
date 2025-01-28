// src/components/CaseStudies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudies.css'; // Ensure you have this CSS file for styling

// Dummy data for demonstration.
// Replace these with your actual case studies/projects.
const caseStudiesData = [
  {
    title: 'Volatility Modeling in Options Trading',
    date: 'August 15, 2025',
    summary: `In this project, I delve into the stochastic processes
               behind volatility, exploring how changes in implied
               volatility impact option prices...`,
    image: '/assets/options.jpg',
    link: '/case-studies/volatility-modeling' // Internal route
  },
  {
    title: 'Physics + Machine Learning: Particle Detection',
    date: 'July 10, 2025',
    summary: `A machine learning approach to detect and classify
               subatomic particles from large-scale physics experiments...`,
    image: '/assets/physics-ml.jpg',
    link: '/case-studies/particle-detection'
  },
  {
    title: 'PennyMeal: A Food Delivery Startup',
    date: 'June 5, 2025',
    summary: `Built a full-stack web application that connects local
               eateries with college campuses, optimizing delivery routes
               and restaurant inventory...`,
    image: '/assets/pennymeal.jpg',
    link: '/case-studies/pennymeal'
  },
  {
    title: 'Real Estate Pricing Tool',
    date: 'May 20, 2025',
    summary: `Developed a data-driven platform to estimate
               residential real estate pricing using predictive models...`,
    image: '/assets/realestate.jpg',
    link: '/case-studies/realestate-pricing'
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section">
      <h2>Featured Case Studies</h2>
      <div className="case-studies-wrapper">
        {caseStudiesData.map((study, index) => (
          <article key={index} className="case-study">
            <img src={study.image} alt={study.title} className="case-study-image" />
            <div className="case-study-content">
              <h3>{study.title}</h3>
              <small className="case-study-date">{study.date}</small>
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
