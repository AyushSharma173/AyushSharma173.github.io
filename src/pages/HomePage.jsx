// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home';
import CaseStudies from '../components/CaseStudies';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Home />
      <CaseStudies />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
