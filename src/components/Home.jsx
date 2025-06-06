// src/components/Home.jsx
import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = ({ activeTab, onTabChange }) => (
  <section className="home-section" id="home">
    <header className="home-header">
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Ayush Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Forward Deployed AI Engineer | End-to-End LLM Workflows
      </motion.p>



      {/* Inline “About” blurb */}
      <motion.p
        className="home-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
      {/* I architect and ship end-to-end GenAI solutions: from scalable data pipelines and high-throughput LLM inference stacks to user-facing dashboards.  
      My toolkit spans Python, C++, Kubernetes, and React, all aimed at solving real-world problems at scale. */}


      </motion.p>


      <nav className="home-nav">
        <button
          className={`home-nav-link ${activeTab==='projects' ? 'active' : ''}`}
          onClick={() => onTabChange('projects')}
        >
          Projects
        </button>
        <button
          className={`home-nav-link ${activeTab==='blog' ? 'active' : ''}`}
          onClick={() => onTabChange('blog')}
        >
          Blog
        </button>
          <button
            className={`home-nav-link ${activeTab==='work' ? 'active' : ''}`}
            onClick={() => onTabChange('work')}
          >
            Work Experience
          </button>
          <button
            className={`home-nav-link ${activeTab==='papers' ? 'active' : ''}`}
            onClick={() => onTabChange('papers')}
          >
            Papers
          </button>
      </nav>


    </header>
  </section>
);

export default Home;