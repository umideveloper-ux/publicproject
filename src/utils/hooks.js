import { useState, useEffect } from 'react';

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: window.devicePixelRatio
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}

export function useResponsiveLayout() {
  const { width, pixelRatio } = useWindowDimensions();
  
  // Gerçek fiziksel piksel genişliğini hesapla
  const physicalWidth = width * pixelRatio;
  
  // Instagram benzeri breakpoint'ler
  const layout = {
    isExtraSmall: physicalWidth < 320 * pixelRatio,  // Çok küçük mobil
    isSmall: physicalWidth < 375 * pixelRatio,       // Küçük mobil
    isMedium: physicalWidth < 414 * pixelRatio,      // Orta mobil
    isLarge: physicalWidth < 768 * pixelRatio,       // Tablet
    isExtraLarge: physicalWidth < 1024 * pixelRatio, // Küçük desktop
    isHuge: physicalWidth >= 1024 * pixelRatio,      // Büyük desktop
    
    // Dinamik boyutlandırma için yardımcı fonksiyonlar
    getFontSize: (base) => {
      const scale = Math.min(width / 320, 1.5); // 320px'den başlayarak ölçekle
      return Math.round(base * scale);
    },
    
    getSpacing: (base) => {
      const scale = Math.min(width / 320, 2); // 320px'den başlayarak ölçekle
      return Math.round(base * scale);
    },
    
    // Container genişliği için
    getContainerWidth: () => {
      if (physicalWidth < 768 * pixelRatio) {
        return '100%'; // Mobil için tam genişlik
      }
      // Tablet ve desktop için ekranın yüzdesi
      return Math.min(width * 0.9, 1200) + 'px';
    },
    
    // Grid için kolon sayısı
    getGridCols: () => {
      if (physicalWidth < 375 * pixelRatio) return 1;  // Çok küçük ekranlar
      if (physicalWidth < 768 * pixelRatio) return 2;  // Mobil
      if (physicalWidth < 1024 * pixelRatio) return 3; // Tablet
      return 4; // Desktop
    }
  };

  return layout;
}
