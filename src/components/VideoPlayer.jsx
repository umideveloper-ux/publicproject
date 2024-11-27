import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function VideoPlayer({ url, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative aspect-video bg-black"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-10 hover:text-gray-300 transition-colors"
      >
        <FaTimes className="text-2xl" />
      </button>
      
      <video
        className="w-full h-full"
        controls
        autoPlay
      >
        <source src={url} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </motion.div>
  );
}