import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import Typewriter from 'typewriter-effect';
import GlowEffect from './GlowEffect';

export default function PremiumTitle() {
  return (
    <div className="relative text-center space-y-4 sm:space-y-6 px-2 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative inline-block"
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4"
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
          style={{
            background: 'linear-gradient(to right, #4f46e5, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
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

      <div className="h-12 sm:h-16 text-sm sm:text-base">
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
            wrapperClassName: 'text-blue-400 text-sm sm:text-base md:text-lg lg:text-xl'
          }}
        />
      </div>
    </div>
  );
}