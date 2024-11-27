import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaClock } from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';

export default function LessonCard({ title, duration, description, videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      {isPlaying ? (
        <VideoPlayer url={videoUrl} onClose={() => setIsPlaying(false)} />
      ) : (
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          
          <div className="flex items-center text-gray-400 space-x-4">
            <FaClock className="text-blue-500" />
            <span>{duration}</span>
          </div>
          
          <p className="text-gray-300">{description}</p>
          
          <button
            onClick={() => setIsPlaying(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlay />
            <span>Dersi İzle</span>
          </button>
        </div>
      )}
    </motion.div>
  );
}