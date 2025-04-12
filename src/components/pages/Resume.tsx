import React from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
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
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 }
  };

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "Webpack", "VS Code", "Figma"] },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-12 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-10"
          style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
        >
          Resume
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Skills</h2>
            <motion.a 
              href="#download" 
              className="bg-blue-600 py-2 px-6 rounded-full text-white hover:bg-blue-700 transition-colors"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
              }}
            >
              Download Resume
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg" 
                whileHover={cardHoverVariants}
                style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={cardHoverVariants}
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
          >
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-blue-400">University Name, 2015-2019</p>
            <p className="text-gray-300 mt-2">
              Graduated with honors. Focused on web development and software engineering.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
