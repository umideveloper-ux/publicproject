import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import Typewriter from 'typewriter-effect';
import GlowEffect from './GlowEffect';
import { useResponsiveLayout } from '../../utils/hooks';

export default function PremiumTitle() {
  const layout = useResponsiveLayout();

  const containerStyle = {
    marginTop: layout.getSpacing(80), // Navbar'ın altında kalması için margin ekliyoruz
    textAlign: 'center',
    padding: `${layout.getSpacing(16)}px ${layout.getSpacing(8)}px`
  };

  const titleStyle = {
    fontSize: layout.getFontSize(layout.isExtraSmall ? 24 : layout.isSmall ? 32 : 48),
    fontWeight: 'bold',
    marginBottom: layout.getSpacing(16)
  };

  const subtitleStyle = {
    minHeight: layout.getSpacing(48)
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative inline-block"
      >
        <motion.h1 
          style={titleStyle}
          animate={{
            textShadow: [
              "0 0 2px #fff, 0 0 5px #4f46e5, 0 0 8px #4f46e5",
              "0 0 1px #fff, 0 0 3px #4f46e5, 0 0 5px #4f46e5"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-transparent bg-clip-text"
        >
          <Typewriter
            options={{
              strings: ['ÖZEL BİGA IŞIKLAR SÜRÜCÜ KURSU'],
              autoStart: true,
              loop: false,
              cursor: '|',
              delay: 100,
              pauseFor: 1000000,
            }}
          />
        </motion.h1>
        <GlowEffect />
      </motion.div>

      <div style={subtitleStyle}>
        <Typewriter
          options={{
            strings: [
              'Sizin için teknolojiyi yakından takip ediyor ve yenilikleri ilk size sunuyoruz!',
              'VR Teknolojisi ile Gerçekçi Sürüş Deneyimi',
              'Yapay Zeka Destekli Kişisel Eğitim Asistanı'
            ],
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 20,
            pauseFor: 2000,
            wrapperClassName: `text-blue-400 text-${layout.isExtraSmall ? 'sm' : 'base'}`
          }}
        />
      </div>
    </div>
  );
}