import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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

  const inputFocusVariants = {
    scale: 1.02,
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    borderColor: "#3b82f6",
    transition: { duration: 0.2 }
  };

  const cardHoverVariants = {
    scale: 1.02,
    boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
    transition: { duration: 0.2 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent! (This is a placeholder)');
  };

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
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg"
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileHover={cardHoverVariants}
          >
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 mb-6">
              Have a question or want to work together? Feel free to contact me using the form or through any of the channels below.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>email@example.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <span>LinkedIn: /in/yourusername</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5, color: "#60a5fa" }}
              >
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>GitHub: @yourusername</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-gray-800 bg-opacity-50 p-8 rounded-lg"
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-300">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                  required
                  whileFocus={inputFocusVariants}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-300">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                  required
                  whileFocus={inputFocusVariants}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-300">Message</label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none"
                  required
                  whileFocus={inputFocusVariants}
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)" 
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
