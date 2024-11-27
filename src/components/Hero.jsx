import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import PremiumTitle from './premium/PremiumTitle';
import GlowingBackground from './premium/GlowingBackground';
import FeatureShowcase from './premium/FeatureShowcase';
import PremiumButton from './premium/PremiumButton';
import ScrollIndicator from './premium/ScrollIndicator';
import AIAssistant from './premium/AIAssistant';
import ThreeBackground from './3d/ThreeBackground';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden flex flex-col">
      <ThreeBackground />
      <GlowingBackground />
      
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="space-y-6 md:space-y-8"
        >
          <PremiumTitle />
          <FeatureShowcase />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center"
          >
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              VR teknolojisi, yapay zeka destekli öğrenme ve interaktif içeriklerle
              sürücü eğitiminde yeni bir çağ başlatıyoruz.
            </p>
          </motion.div>

          <PremiumButton />
        </motion.div>
      </div>

      <ScrollIndicator />
      <AIAssistant />
    </div>
  );
}