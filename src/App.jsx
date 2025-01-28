// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="case-studies">
          <Route path="volatility-modeling" element={<CaseStudy1 />} />
          <Route path="particle-detection" element={<CaseStudy2 />} />
          {/* Add more case studies here */}
        </Route>
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
