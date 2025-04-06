import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NameAnimation from './NameIntroAnimation';
import MainContent from './MainComponent';

const HomePage: React.FC = () => {
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
          <MainContent />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;