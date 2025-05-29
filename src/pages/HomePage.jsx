// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Blog from '../components/Blog';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import Papers from "../pages/Papers_";
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const { hash } = useLocation()

  // on mount or when hash changes, switch tab
  useEffect(() => {
    if (hash === '#papers') {
      setActiveTab('papers')
      // scroll into view if you like
      document.getElementById('papers')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])


  return (
    <>
      {/* Hero + nav */}
      <Home activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Persistent About section */}
      {/* <About /> */}

      {/* Tab panels under the About */}
      <div className="tab-content">
        {/* {activeTab === 'projects' && <CaseStudies />} */}
        {activeTab === 'projects' && (
          <CaseStudies onTabChange={setActiveTab} />
        )}
        {activeTab === 'blog'     && <Blog />}
        {activeTab === 'work'     && <WorkExperience />}
        {activeTab === 'papers'   && <Papers />} 
      </div>

      {/* Footer / contact at the very bottom */}
      <Contact />
    </>
  );
};

export default HomePage;
