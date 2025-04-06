import React from 'react';
import { motion } from 'framer-motion';

const MainContent: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
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
          <motion.div 
            variants={itemVariants}
            className="text-xl font-bold"
          >
            HET PATEL
          </motion.div>
          <motion.ul 
            variants={itemVariants}
            className="flex space-x-6"
          >
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </motion.ul>
        </nav>
      </header>

      <main>
        <section id="about" className="min-h-screen flex items-center pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold mb-6"
            >
              Hi, I'm HET PATEL
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300"
            >
              Full Stack Developer specializing in React, TypeScript, and modern web technologies.
            </motion.p>
          </div>
        </section>
        
        {/* Additional sections would go here */}
        <section id="projects" className="min-h-screen py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold mb-12"
            >
              Projects
            </motion.h2>
            {/* Project cards would go here */}
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default MainContent;