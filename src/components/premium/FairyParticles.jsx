import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const FairyParticle = ({ delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: -30,
      x: [-10, 10, -10]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
      ease: "easeInOut"
    }}
    className="absolute"
  >
    <FaStar className="text-yellow-300 text-sm" />
  </motion.div>
);

export default function FairyParticles() {
  return (
    <>
      {Array(10).fill(null).map((_, index) => (
        <FairyParticle key={index} delay={index * 0.2} />
      ))}
    </>
  );
}