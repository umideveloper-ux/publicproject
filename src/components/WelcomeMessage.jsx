import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function WelcomeMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="space-y-4 text-center max-w-3xl mx-auto"
    >
      <AnimatedText className="text-lg md:text-xl text-blue-400 font-semibold tracking-wide" delay={1.2}>
        Türkiye'nin En Yenilikçi Online Eğitim Platformu
      </AnimatedText>
      <AnimatedText className="text-sm md:text-base text-gray-400 leading-relaxed" delay={1.4}>
        Işıklar Sürücü Kursu tarafından özel olarak tasarlanmış,
        kişiselleştirilmiş eğitim deneyimi sunan dijital platformumuza hoş geldiniz.
      </AnimatedText>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base text-gray-400"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span>VR Teknolojisi</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          <span>Yapay Zeka Desteği</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
          <span>İnteraktif Öğrenme</span>
        </div>
      </motion.div>
    </motion.div>
  );
}