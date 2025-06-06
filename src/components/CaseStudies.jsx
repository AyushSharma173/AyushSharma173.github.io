// AyushSharma173.github.io/src/components/CaseStudies.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CaseStudies.css';

const DEFAULT_IMAGE = '/assets/default-project.jpg';

const caseStudiesData = [

  { 
    title: 'FedAdapt: Adaptive FL Framework',
    date:  'Jan 2025',
    summary: `FedAdapt adds live dashboard, α-mix personalization, and device-aware co-optimization, cutting federated-learning convergence time by 30%.`,
    image: '/papers/fedadapt_thumbnail.jpg',
    goToPapers: true 
  },

  { 
    title: 'CodeSage: Retrieval-Augmented Code Reasoning',
    date:  'May 2025',
    summary: `CodeSage builds a graph-based context retrieval engine using Neo4j + Qdrant + OpenAI to answer natural-language questions about any Python repo.`,
    image: '/assets/codesage_thumbnail.jpg',
    goToPapers: true
  },

  {
    title: 'Quantamental Volatility Surface Forecasting',
    date: 'Aug 15, 2025',
    summary: `In this project, I delve into the stochastic processes behind volatility, exploring how changes in implied volatility impact option prices...`,
    image: '/assets/title_image.png',
    link: '/case-studies/volatility-modeling'
  },
  {
    title: 'Quantum Circuit Simulator in Python',
    date: 'Feb 4, 2025',
    summary: `Built a matrix-free simulator for Grover's search and QFT, letting users experiment with quantum algorithms in pure Python.`,
    image: '/assets/quantum-simulator.jpg',
    link: '/case-studies/quantum-circuit-simulator'
  },
  {
    title: 'AI-Powered Meal & Nutrition Tracking',
    date: 'Jun 5, 2024',
    summary: `A smart nutrition tracker that uses computer vision to log meals and suggest balanced plans—making healthy eating effortless.`,
    image: '/assets/pennymeal.jpg',
    link: '/case-studies/pennymeal'
  },
  {
    title: 'Real Estate Market Report Generator',
    date: 'May 20, 2025',
    summary: `Data-driven platform creating in-depth real estate reports using live prices, demographics, and heatmaps.`,
    image: '/assets/realestate.jpg',
    link: '/case-studies/realestate-pricing'
  },


];

const CaseStudies = ({ onTabChange = () => {} }) => (
  <section id="case-studies" className="case-studies-section">
    <h2 className="case-studies-heading">Featured Projects</h2>
    <div className="case-studies-wrapper">
      {caseStudiesData.map((study, i) => (
        
        <article key={i} className="case-study">
          <div className="case-study-image-wrapper">
            <img
              src={study.image}
              alt={study.title}
              onError={e => { e.currentTarget.src = DEFAULT_IMAGE }}
              loading="lazy"
            />
          </div>
          <div className="case-study-content">
            <h3>{study.title}</h3>
            <small className="case-study-date">{study.date}</small>
            <p className="case-study-summary">{study.summary}</p>
            {study.goToPapers ? (
  <button
    className="case-study-link as-button"
    onClick={() => onTabChange('papers')}
  >
    View Paper
  </button>
) : (
  <Link to={study.link} className="case-study-link">
    Read More →
  </Link>
)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

CaseStudies.propTypes = {
  onTabChange: PropTypes.func
};

export default CaseStudies;
