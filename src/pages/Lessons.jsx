import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBook, FaQuestionCircle, FaCar } from 'react-icons/fa';
import LessonCard from '../components/LessonCard';
import VideoPlayer from '../components/VideoPlayer';

export default function Lessons() {
  const categories = [
    {
      title: "Direksiyon Eğitim Videoları",
      icon: FaCar,
      lessons: [
        {
          title: "Temel Araç Kontrolü",
          duration: "15 dakika",
          description: "Araç kumandalarının tanıtımı ve temel kullanım teknikleri",
          videoUrl: "/videos/temel-kontrol.mp4"
        },
        {
          title: "Park Etme Teknikleri",
          duration: "20 dakika",
          description: "Paralel, dik ve açılı park manevraları",
          videoUrl: "/videos/park-teknikleri.mp4"
        }
      ]
    },
    {
      title: "Teorik Dersler",
      icon: FaBook,
      lessons: [
        {
          title: "Trafik İşaretleri",
          duration: "30 dakika",
          description: "Trafik işaretlerinin anlamları ve uygulamaları",
          videoUrl: "/videos/trafik-isaretleri.mp4"
        },
        {
          title: "Trafik Kuralları",
          duration: "45 dakika",
          description: "Temel trafik kuralları ve güvenli sürüş",
          videoUrl: "/videos/trafik-kurallari.mp4"
        }
      ]
    },
    {
      title: "Sıkça Sorulan Sorular",
      icon: FaQuestionCircle,
      lessons: [
        {
          title: "Sınav Süreçleri",
          duration: "10 dakika",
          description: "Ehliyet sınavı aşamaları ve dikkat edilecek hususlar",
          videoUrl: "/videos/sinav-surecleri.mp4"
        },
        {
          title: "Başarı Taktikleri",
          duration: "15 dakika",
          description: "Deneyimli eğitmenlerden sınav başarı taktikleri",
          videoUrl: "/videos/basari-taktikleri.mp4"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Eğitim İçerikleri
        </motion.h1>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <category.icon className="text-2xl text-blue-500" />
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.lessons.map((lesson, lessonIndex) => (
                  <LessonCard
                    key={lessonIndex}
                    {...lesson}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}