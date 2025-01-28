// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Import Footer
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer /> {/* Include Footer */}
    </>
  );
};

export default Layout;
