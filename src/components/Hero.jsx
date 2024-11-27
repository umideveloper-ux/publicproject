import React from 'react';
import { motion } from 'framer-motion';
import { useResponsiveLayout } from '../utils/hooks';
import PremiumTitle from './premium/PremiumTitle';
import GlowingBackground from './premium/GlowingBackground';
import FeatureShowcase from './premium/FeatureShowcase';
import PremiumButton from './premium/PremiumButton';
import ScrollIndicator from './premium/ScrollIndicator';
import AIAssistant from './premium/AIAssistant';
import ThreeBackground from './3d/ThreeBackground';

export default function Hero() {
  const layout = useResponsiveLayout();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: layout.getSpacing(24),
    padding: `${layout.getSpacing(32)}px ${layout.getSpacing(16)}px`,
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: layout.getFontSize(layout.isExtraSmall ? 32 : layout.isSmall ? 40 : 48),
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #3B82F6, #2563EB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: layout.getSpacing(16)
  };

  const subtitleStyle = {
    fontSize: layout.getFontSize(layout.isExtraSmall ? 16 : 18),
    color: '#94A3B8',
    maxWidth: '800px',
    lineHeight: 1.6
  };

  const buttonStyle = {
    fontSize: layout.getFontSize(16),
    padding: `${layout.getSpacing(12)}px ${layout.getSpacing(24)}px`,
    borderRadius: '9999px',
    background: 'linear-gradient(to right, #3B82F6, #2563EB)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.25)'
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden flex flex-col">
      <ThreeBackground />
      <GlowingBackground />
      
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={containerStyle}
        >
          <PremiumTitle />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center mt-2 sm:mt-4"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
              VR teknolojisi, yapay zeka destekli öğrenme ve interaktif içeriklerle
              sürücü eğitiminde yeni bir çağ başlatıyoruz.
            </p>
          </motion.div>

          <FeatureShowcase />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={buttonStyle}
            onClick={scrollToTop}
            className="hover:shadow-lg"
          >
            Ücretsiz Başla
          </motion.button>
        </motion.div>
      </div>

      <ScrollIndicator />
      <AIAssistant />
    </div>
  );
}