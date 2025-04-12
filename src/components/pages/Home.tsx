import React from 'react';
import { motion } from 'framer-motion';

// Simpler background component using CSS
const Background3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div className="stars-container">
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 2;
          const animationDuration = 3 + Math.random() * 10;
          return (
            <div 
              key={i}
              className="star"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const floatingHoverVariants = {
    y: -10,
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
    transition: { duration: 0.3 }
  };

  return (
    <div className="relative min-h-screen">
      <Background3D />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex items-center px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-6 text-shadow-lg"
            style={{ textShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          >
            Hi, I'm HET PATEL
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
          >
            Full Stack Developer specializing in React, TypeScript, and modern web technologies.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8"
          >
            <motion.p 
              className="text-lg text-gray-400 leading-relaxed bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm"
              style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
              whileHover={floatingHoverVariants}
            >
              Welcome to my portfolio website. Navigate using the menu to learn more about my work and skills.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;