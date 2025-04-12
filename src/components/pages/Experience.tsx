import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      id: 1,
      title: "Senior Developer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Led development of key features for company flagship product.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2018 - 2021",
      description: "Developed and maintained client websites using React and Node.js.",
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2016 - 2018",
      description: "Assisted in building web applications and learning modern web technologies.",
    }
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
          Experience
        </motion.h1>

        <div className="space-y-12 relative">
          {/* Timeline line */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
            style={{ 
              left: "3px",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" 
            }}
          ></div>
          
          {experiences.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="border-l-4 border-blue-500 pl-6 py-6 bg-gray-800 bg-opacity-70 rounded-r-lg"
              style={{ 
                boxShadow: "5px 5px 20px rgba(0,0,0,0.15)",
                zIndex: experiences.length - index
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
              }}
            >
              {/* Timeline dot */}
              <div 
                className="absolute w-4 h-4 bg-blue-500 rounded-full" 
                style={{ 
                  left: "-10px", 
                  top: "30px",
                  boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)" 
                }}
              ></div>
              
              <motion.h3 
                className="text-2xl font-bold text-white"
              >
                {job.title}
              </motion.h3>
              <div 
                className="flex justify-between text-blue-400 my-2"
              >
                <span>{job.company}</span>
                <span>{job.period}</span>
              </div>
              <p 
                className="text-gray-300"
              >
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
