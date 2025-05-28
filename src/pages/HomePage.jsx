// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Blog from '../components/Blog';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import Papers from "../pages/Papers_";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <>
      {/* Hero + nav */}
      <Home activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Persistent About section */}
      {/* <About /> */}

      {/* Tab panels under the About */}
      <div className="tab-content">
        {activeTab === 'projects' && <CaseStudies />}
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
