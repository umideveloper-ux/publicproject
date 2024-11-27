import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWandMagicSparkles } from 'react-icons/fa6';

export default function MagicalFairy({ onComplete }) {
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  const fairyVariants = {
    initial: { y: "-20vh", x: "50vw", scale: 0.5, opacity: 0 },
    animate: {
      y: "120vh",
      x: [
        "50vw", "45vw", "55vw", "40vw", "60vw", "50vw"
      ],
      scale: 1,
      opacity: 1,
      rotate: [0, -15, 15, -10, 10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        onComplete: () => {
          setHasReachedBottom(true);
          setTimeout(onComplete, 1000);
        }
      }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      initial="initial"
      animate="animate"
      variants={fairyVariants}
    >
      <div className="relative">
        <motion.div
          variants={glowVariants}
          className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-50"
        />
        
        <div className="relative bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-full shadow-lg">
          <FaWandMagicSparkles className="text-4xl text-white" />
        </div>

        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            variants={sparkleVariants}
            className="absolute"
            style={{
              top: Math.random() * 40 - 20,
              left: Math.random() * 40 - 20,
              transformOrigin: "center",
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        ))}
      </div>

      {hasReachedBottom && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 2, 3], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
        />
      )}
    </motion.div>
  );
}