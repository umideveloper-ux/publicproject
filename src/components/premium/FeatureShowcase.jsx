import React from 'react';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaBrain, FaGraduationCap, FaCar, FaAward, FaMobile } from 'react-icons/fa';
import { useResponsiveLayout } from '../../utils/hooks';

export default function FeatureShowcase() {
  const layout = useResponsiveLayout();

  const features = [
    {
      icon: FaVrCardboard,
      title: "VR Teknolojisi",
      description: "Gerçekçi sürüş simülasyonu",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: FaBrain,
      title: "Yapay Zeka",
      description: "Kişiselleştirilmiş eğitim asistanı",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: FaCar,
      title: "Sürüş Eğitimi",
      description: "Profesyonel direksiyon dersleri",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: FaGraduationCap,
      title: "Online Dersler",
      description: "Kapsamlı teorik eğitim",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      icon: FaAward,
      title: "%98 Başarı",
      description: "Garantili sınav başarısı",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: FaMobile,
      title: "Mobil Erişim",
      description: "Her yerden kolay erişim",
      color: "from-teal-600 to-teal-400"
    }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${layout.getGridCols()}, 1fr)`,
    gap: layout.getSpacing(16),
    padding: layout.getSpacing(16)
  };

  const getIconSize = () => {
    return layout.getFontSize(24); // Baz boyut 24px
  };

  const getTitleSize = () => {
    return layout.getFontSize(18); // Baz boyut 18px
  };

  const getDescriptionSize = () => {
    return layout.getFontSize(14); // Baz boyut 14px
  };

  return (
    <div style={gridStyle}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
          style={{
            padding: layout.getSpacing(16),
            borderRadius: layout.getSpacing(8)
          }}
          className="bg-black bg-opacity-50 overflow-hidden group relative"
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '1px' }}>
            <div className="h-full w-full bg-black"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center text-center" style={{ gap: layout.getSpacing(8) }}>
            <div className={`p-2 rounded-full bg-gradient-to-r ${feature.color}`}>
              <feature.icon style={{ width: getIconSize(), height: getIconSize() }} className="text-white" />
            </div>
            <h3 style={{ fontSize: getTitleSize() }} className="font-semibold text-white">
              {feature.title}
            </h3>
            <p style={{ fontSize: getDescriptionSize() }} className="text-gray-400">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}