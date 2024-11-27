import React from 'react';
import { motion } from 'framer-motion';

export default function StarEffect() {
  return (
    <div className="relative w-full h-16 overflow-hidden">
      <motion.div
        animate={{
          x: ["0%", "100%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform -translate-y-1/2"
      />
      
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
  );
}