import React from 'react';
import { motion } from 'framer-motion';
import { useResponsiveLayout } from '../utils/hooks';
import ThreeBackground from './3d/ThreeBackground';
import GlowingBackground from './premium/GlowingBackground';
import PremiumTitle from './premium/PremiumTitle';
import FeatureShowcase from './premium/FeatureShowcase';
import ScrollIndicator from './premium/ScrollIndicator';
import AIAssistant from './premium/AIAssistant';

export default function Hero() {
  const layout = useResponsiveLayout();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 10,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${layout.getSpacing(24)}px ${layout.getSpacing(16)}px`,
    gap: layout.getSpacing(24)
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: layout.getSpacing(32),
    alignItems: 'center'
  };

  const buttonStyle = {
    fontSize: layout.getFontSize(18),
    padding: `${layout.getSpacing(16)}px ${layout.getSpacing(32)}px`,
    borderRadius: '9999px',
    background: 'linear-gradient(to right, #3B82F6, #2563EB)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(59, 130, 246, 0.25)',
    marginTop: layout.getSpacing(16),
    marginBottom: layout.getSpacing(32),
    width: 'fit-content'
  };

  const descriptionStyle = {
    fontSize: layout.getFontSize(16),
    color: '#94A3B8',
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: 1.6,
    margin: `${layout.getSpacing(16)}px auto`
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
      <ThreeBackground />
      <GlowingBackground />
      
      <div style={containerStyle}>
        <div style={contentStyle}>
          <PremiumTitle />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={descriptionStyle}
          >
            VR teknolojisi, yapay zeka destekli öğrenme ve interaktif içeriklerle
            sürücü eğitiminde yeni bir çağ başlatıyoruz.
          </motion.p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 12px rgba(59, 130, 246, 0.35)'
            }}
            whileTap={{ scale: 0.95 }}
            style={buttonStyle}
            onClick={scrollToTop}
            className="hover:shadow-lg"
          >
            Ücretsiz Başla
          </motion.button>

          <FeatureShowcase />
        </div>
      </div>

      <ScrollIndicator />
      <AIAssistant />
    </div>
  );
}