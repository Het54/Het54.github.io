import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameAnimation from './NameIntroAnimation';
import MainContent from './MainComponent';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const Main: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const handleAnimationComplete = () => {
    // Wait a bit after name animation completes before transitioning
    setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NameAnimation
              name="HET PATEL" 
              onComplete={handleAnimationComplete} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainContent />}>
                <Route index element={<Home />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects />} />
                <Route path="resume" element={<Resume />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;