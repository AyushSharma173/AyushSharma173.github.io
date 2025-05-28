// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="/"
              className="text-2xl font-bold text-[var(--color-primary)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ayush Sharma
            </motion.a>


          <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                      key={item}
                      // Use Link from react-router-dom if navigating to separate routes
                      // or keep href for scroll-to-section on homepage
                      href={item === 'Projects' ? '/#projects' : `/#${item.toLowerCase()}`} 
                      className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                      whileHover={{ y: -2 }}
                  >
                      {item}
                  </motion.a>
              ))}
          </div>

            <motion.button
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--color-border)]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-[var(--color-text-light)]">
                Email: your.email@example.com<br />
                Location: Your Location
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com/yourusername`}
                    className="text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                    whileHover={{ y: -2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Add social icons here */}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-text-light)]">
            <p>© {new Date().getFullYear()} Ayush Sharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
