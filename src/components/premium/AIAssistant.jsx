import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMagic, FaComments } from 'react-icons/fa';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1 
            }}
            className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
          >
            <button
              onClick={toggleChat}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full transform transition duration-200 hover:scale-105 overflow-hidden">
                {/* Animasyonlu AI Avatar */}
                <div className="relative w-full h-full">
                  {/* Dalgalı Arka Plan Animasyonu */}
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                      opacity: [0.5, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30"
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  />
                  
                  {/* Merkez Halka Animasyonu */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-2 rounded-full border-2 border-white/30"
                  />
                  
                  {/* İç Parçacık Efekti */}
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 60}deg) translateY(-20px)`
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Merkez İkon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <FaComments className="text-2xl md:text-3xl text-white" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Online Göstergesi */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 w-[90vw] md:w-96 bg-black/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800/50 z-40 overflow-hidden md:bottom-28 md:right-8"
          >
            <div className="p-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <FaMagic className="text-white text-lg" />
                </motion.div>
                <span className="text-white font-medium">Eğitim Asistanı</span>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <FaComments className="text-white text-sm" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-2xl rounded-tl-none p-4">
                    <p className="text-white mb-4">Merhaba! Ben sizin kişisel eğitim asistanınız. Size aşağıdaki konularda yardımcı olabilirim:</p>
                    
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center space-x-2 text-blue-400"
                      >
                        <FaMagic className="text-sm" />
                        <span className="text-sm">Online ehliyet sınavı pratikleri</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center space-x-2 text-purple-400"
                      >
                        <FaMagic className="text-sm" />
                        <span className="text-sm">Ehliyet başvuru süreçleri hakkında bilgi</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex items-center space-x-2 text-pink-400"
                      >
                        <FaMagic className="text-sm" />
                        <span className="text-sm">Ders programı ve içerikleri</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-center space-x-2 text-teal-400"
                      >
                        <FaMagic className="text-sm" />
                        <span className="text-sm">Sınav tarihleri ve kayıt işlemleri</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 }}
                        className="flex items-center space-x-2 text-green-400"
                      >
                        <FaMagic className="text-sm" />
                        <span className="text-sm">7/24 online destek ve danışmanlık</span>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="mt-4 text-white/80 text-sm"
                    >
                      Hangi konuda yardıma ihtiyacınız var?
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 text-white text-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                  >
                    Online Sınav Pratiği
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30 text-white text-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-all"
                  >
                    Başvuru Yardımı
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg border border-pink-500/30 text-white text-sm hover:from-pink-500/30 hover:to-red-500/30 transition-all"
                  >
                    Ders Programı
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-2 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-lg border border-teal-500/30 text-white text-sm hover:from-teal-500/30 hover:to-green-500/30 transition-all"
                  >
                    Canlı Destek
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}