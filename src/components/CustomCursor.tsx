import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Track mouse movement
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // Track when mouse leaves the window
    const mouseLeave = () => {
      setIsVisible(false);
    };
    
    // Track when mouse enters the window
    const mouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseenter', mouseEnter);
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseenter', mouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Small dot that follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Larger circle that follows with delay */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 22,
          y: mousePosition.y - 22,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.8,
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default CustomCursor;