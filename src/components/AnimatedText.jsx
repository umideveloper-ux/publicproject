import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ children, delay = 0, className = "" }) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  // Handle non-string children with a simple fade animation
  if (typeof children !== 'string') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Process string children with word-by-word animation
  const words = children.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}