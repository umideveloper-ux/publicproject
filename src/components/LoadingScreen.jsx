import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCarAlt, FaRobot, FaGraduationCap, FaAward, FaMedal } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const loadingMessages = [
  {
    Icon: FaRobot,
    message: "Yapay zeka destekli eğitim asistanınız hazırlanıyor...",
    highlight: "Türkiye'nin ilk yapay zeka destekli sürücü kursu platformu"
  },
  {
    Icon: FaGraduationCap,
    message: "Premium eğitim içerikleri yükleniyor...",
    highlight: "40 yıllık tecrübemizle sizin için özel olarak hazırlandı"
  },
  {
    Icon: FaAward,
    message: "Kişiselleştirilmiş eğitim planınız oluşturuluyor...",
    highlight: "%98 başarı oranı ile Türkiye'nin en başarılı kursu"
  }
];

export default function LoadingScreen({ onLoadingComplete }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showFinalAnimation, setShowFinalAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowFinalAnimation(true);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  const CurrentIcon = loadingMessages[messageIndex].Icon;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showFinalAnimation ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="max-w-4xl w-full px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, times: [0, 0.7, 1] }}
          className="relative mb-4"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
          />
          <FaCarAlt className="text-6xl md:text-8xl text-blue-500 mx-auto relative z-10" />
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 mt-6"
          >
            EHLİYET ALIYORUM.COM
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-16"
        >
          <div className="flex items-center justify-center space-x-3 text-xl md:text-3xl">
            <FaMedal className="text-2xl md:text-4xl text-blue-400" />
            <div className="relative">
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 4px #fff, 0 0 11px #4df0ff, 0 0 19px #4df0ff",
                    "0 0 2px #fff, 0 0 7px #4df0ff, 0 0 13px #4df0ff"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-[#4df0ff] font-bold tracking-wider"
              >
                <Typewriter
                  options={{
                    strings: ['IŞIKLAR SÜRÜCÜ KURSU TARAFINDAN GELİŞTİRİLMEKTEDİR'],
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    cursor: ''
                  }}
                />
              </motion.div>
            </div>
            <FaMedal className="text-2xl md:text-4xl text-blue-400" />
          </div>
        </motion.div>

        <div className="h-32 mb-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <CurrentIcon className="text-4xl text-blue-500 mb-4" />
              <p className="text-lg text-gray-300 mb-2">
                {loadingMessages[messageIndex].message}
              </p>
              <p className="text-sm text-blue-400">
                {loadingMessages[messageIndex].highlight}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
          />
          {progress === 100 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 bg-white"
            />
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 text-lg"
        >
          {progress < 100 ? (
            `Sistem Hazırlığı: %${Math.round(progress)}`
          ) : (
            "Eğitim platformunuz hazır!"
          )}
        </motion.p>
      </div>

      {progress === 100 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-3xl"
        />
      )}
    </motion.div>
  );
}