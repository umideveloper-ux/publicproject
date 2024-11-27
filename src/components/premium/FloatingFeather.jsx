import React from 'react';
import { motion } from 'framer-motion';
import { FaFeatherAlt } from 'react-icons/fa';

export default function FloatingFeather() {
  return (
    <motion.div
      initial={{ y: -100, x: "50vw", opacity: 0 }}
      animate={{
        y: ["0vh", "100vh"],
        x: ["50vw", "45vw", "55vw", "48vw", "52vw", "50vw"],
        opacity: [0, 1, 1, 1, 0],
        rotate: [0, 15, -15, 10, -10, 0]
      }}
      transition={{
        duration: 15,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="fixed top-0 left-0 z-50 pointer-events-none"
    >
      <motion.div
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
      >
        <FaFeatherAlt className="text-4xl text-blue-400/80" />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 blur-lg bg-blue-400/30"
        />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 blur-xl bg-gradient-to-b from-blue-400/20 to-purple-400/20"
      />
    </motion.div>
  );
}