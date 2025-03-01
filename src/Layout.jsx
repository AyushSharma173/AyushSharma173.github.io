// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Optional: Create a Footer component if desired
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet /> {/* This renders the matched child route */}
      {/* <Footer /> */} {/* Uncomment if you create a Footer */}
    </>
  );
};

export default Layout;
