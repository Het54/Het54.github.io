import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MainContent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const menuVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const linkItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm py-4 px-6 z-40">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-xl font-bold">
            HET PATEL
          </div>
          <div className="cursor-pointer z-50" onClick={toggleMenu}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-8 h-8"
            >
              {menuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </div>
        </nav>
      </header>

      {/* Sliding Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-64 bg-gray-800 p-8 z-40"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={e => e.stopPropagation()}
            >
              <motion.ul 
                className="mt-16 space-y-8"
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.li variants={linkItemVariants}>
                  <Link 
                    to="/" 
                    className={`text-2xl font-medium ${location.pathname === '/' ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={linkItemVariants}>
                  <Link 
                    to="/experience" 
                    className={`text-2xl font-medium ${location.pathname === '/experience' ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                    onClick={closeMenu}
                  >
                    Experience
                  </Link>
                </motion.li>
                <motion.li variants={linkItemVariants}>
                  <Link 
                    to="/projects" 
                    className={`text-2xl font-medium ${location.pathname === '/projects' ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                    onClick={closeMenu}
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li variants={linkItemVariants}>
                  <Link 
                    to="/resume" 
                    className={`text-2xl font-medium ${location.pathname === '/resume' ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                    onClick={closeMenu}
                  >
                    Resume
                  </Link>
                </motion.li>
                <motion.li variants={linkItemVariants}>
                  <Link 
                    to="/contact" 
                    className={`text-2xl font-medium ${location.pathname === '/contact' ? 'text-blue-400' : 'hover:text-blue-400'} transition-colors`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Outlet />
      </main>
    </motion.div>
  );
};

export default MainContent;