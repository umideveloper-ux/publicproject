import React from 'react';
import { motion } from 'framer-motion';

export default function StatsCard({ title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 1.4, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex-1 max-w-xs mx-auto transform transition-all duration-300 hover:shadow-2xl"
    >
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 1.6, duration: 0.5 }}
        className="text-xl font-semibold text-white mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 1.8, duration: 0.5 }}
        className="text-gray-300"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}