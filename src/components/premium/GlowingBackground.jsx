import React from 'react';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

export default function GlowingBackground() {
  const [ref, bounds] = useMeasure();

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-1/4 w-full h-full bg-blue-500 rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -top-1/4 -right-1/4 w-full h-full bg-purple-500 rounded-full filter blur-3xl opacity-20"
      />
    </div>
  );
}