import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCar, FaMoneyBillWave, FaIdCard, FaLaptop, FaCalendarAlt } from 'react-icons/fa';
import { GiFireGem, GiFairyWand, GiSparkles } from 'react-icons/gi';

export default function FAQ() {
  const features = [
    {
      icon: FaGraduationCap,
      title: "Teorik Dersler",
      description: "Teorik derslere 'Derslerim' bölümünden erişebilir, istediğiniz zaman çalışabilirsiniz. Her ders için detaylı notlar ve özetler hazırladım.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: FaCar,
      title: "Direksiyon Eğitimi",
      description: "Size özel direksiyon derslerinizi planlamak için randevu sistemimizi kullanabilirsiniz. Eğitimler birebir verilmektedir.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: FaMoneyBillWave,
      title: "E-Sınav Ödemeleri",
      description: "E-sınav ücretini kredi kartı, havale/EFT veya nakit olarak ödeyebilirsiniz. Taksit seçenekleri hakkında bilgi almak için bana sorabilirsiniz.",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: FaIdCard,
      title: "Başvuru Belgeleri",
      description: "Ehliyet başvurusu için gerekli tüm belgeleri sizin için listeledim. Her belgenin nasıl temin edileceği konusunda yardımcı olabilirim.",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      icon: FaLaptop,
      title: "Online Sistem",
      description: "Size özel hazırladığım online eğitim sistemine kullanıcı adı ve şifrenizle giriş yapabilirsiniz. Tüm dersler ve materyaller burada sizi bekliyor.",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: FaCalendarAlt,
      title: "Sınav Takibi",
      description: "Sınav tarihlerinizi takip ediyor ve size zamanında bilgilendirme yapıyorum. SMS ve e-posta ile sizi haberdar edeceğim.",
      color: "from-teal-600 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* AI Assistant Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          {/* Fairy Animation Container */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40">
            <motion.div
              className="relative w-full h-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Center Fairy */}
              <GiFairyWand className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-pink-400" />
              
              {/* Floating Gems */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <GiFireGem className="absolute top-0 left-1/4 text-2xl text-purple-400" />
                <GiFireGem className="absolute bottom-0 right-1/4 text-2xl text-blue-400" />
              </motion.div>

              {/* Sparkles */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <GiSparkles className="absolute top-1/4 right-0 text-xl text-yellow-400" />
                <GiSparkles className="absolute bottom-1/4 left-0 text-xl text-yellow-400" />
              </motion.div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-20">
            Merhaba! Ben Sizin Eğitim Asistanınızım
          </h1>
          <p className="text-xl text-pink-400 mb-4">
            Ehliyet alma sürecinizde size yardımcı olmak için buradayım
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Bu uygulama aracılığıyla aşağıdaki işlemleri yapabilir, sorularınıza yanıt alabilirsiniz. 
            Süreç boyunca size destek olmaktan mutluluk duyacağım.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-pink-500/30 transition-colors duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            Başka sorularınız için 7/24 hizmetinizdeyim
          </p>
          <a
            href="tel:+902165555555"
            className="text-pink-400 hover:text-pink-300 font-semibold mt-2 block text-xl"
          >
            0216 555 55 55
          </a>
        </motion.div>
      </div>
    </div>
  );
}
