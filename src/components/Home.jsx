import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="w-full h-screen flex text-center flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-center px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl text-center font-bold"
      >
        Ayush Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full mx-auto text-xl text-center md:text-2xl font-light mt-6"
      >
        Creator | Indie Hacker | Full-Stack Developer
      </motion.p>



      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-center text-gray-200 mt-4"
      >
        Innovating at the intersection of technology and creativity.
      </motion.p> */}
      
    </section>
  );
};

export default Home;
