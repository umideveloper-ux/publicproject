import React from 'react';
import { motion } from 'framer-motion';

export default function GlowEffect() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 0.85, 0.8]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 filter blur-3xl"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <motion.div
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [-2, 2, -2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
      />
    </>
  );
}