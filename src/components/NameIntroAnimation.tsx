import React from 'react';
import { motion } from 'framer-motion';

interface NameAnimationProps {
  name: string;
  onComplete?: () => void;
}

const NameAnimation: React.FC<NameAnimationProps> = ({ name, onComplete }) => {
  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  // Variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Variants for the fill effect
  const fillVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: { 
        duration: 1.5, 
        delay: 1.5,
        ease: "easeInOut",
        onComplete: onComplete
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      <div className="flex justify-center">
        {name.split('').map((letter, index) => (
          <motion.div
            key={index}
            variants={letterVariants}
            className="relative"
          >
            <span className="inline-block text-6xl md:text-8xl font-bold text-gray-700 px-1">
              {letter}
            </span>
            <motion.div 
              variants={fillVariants}
              className="absolute inset-0 overflow-hidden flex items-center justify-center"
            >
              <span className="inline-block text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text px-1">
                {letter}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NameAnimation;