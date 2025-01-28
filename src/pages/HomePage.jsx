// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <CaseStudies />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
