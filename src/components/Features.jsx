import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaVrCardboard, FaBook, FaMobile } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: FaCar,
      title: "Simülasyon Eğitimi",
      description: "En gelişmiş sürüş simülatörleriyle gerçek sürüş deneyimi"
    },
    {
      icon: FaVrCardboard,
      title: "VR Teknolojisi",
      description: "Sanal gerçeklik ile interaktif trafik senaryoları"
    },
    {
      icon: FaBook,
      title: "Kapsamlı İçerik",
      description: "Güncel müfredat ve zengin eğitim materyalleri"
    },
    {
      icon: FaMobile,
      title: "Mobil Erişim",
      description: "Tüm cihazlardan kesintisiz eğitim imkanı"
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
        >
          <AnimatedText className="text-4xl font-bold text-white mb-4">
            Neden Biz?
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-gray-300"
            delay={0.3}
          >
            En son teknoloji ile donatılmış eğitim sistemimiz
          </AnimatedText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl transform transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
              >
                <feature.icon className="text-2xl text-white" />
              </motion.div>
              <AnimatedText 
                className="text-xl font-semibold text-white mb-2 text-center"
                delay={index * 0.2 + 0.4}
              >
                {feature.title}
              </AnimatedText>
              <AnimatedText 
                className="text-gray-300 text-center"
                delay={index * 0.2 + 0.5}
              >
                {feature.description}
              </AnimatedText>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}