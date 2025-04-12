import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    scale: 1.05,
    y: -15,
    transition: { duration: 0.3 }
  };

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      tech: "React, TypeScript, Framer Motion",
      description: "A responsive portfolio website with smooth animations.",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Full-stack e-commerce application with payment integration.",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      tech: "Vue.js, Firebase",
      description: "Real-time task tracking application with user authentication.",
      link: "#"
    }
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-10"
          style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={cardHoverVariants}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              style={{ boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <motion.a 
                  href={project.link} 
                  className="inline-block py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 10px rgba(0,0,0,0.3)"
                  }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
