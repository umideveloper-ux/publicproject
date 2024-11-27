import React from 'react';
import Hero from '../components/Hero';
import PremiumTitle from '../components/premium/PremiumTitle';
import FeatureShowcase from '../components/premium/FeatureShowcase';
import { useWindowSize } from '../utils/hooks';

export default function Home() {
  const { isMobile } = useWindowSize();

  return (
    <div className={`flex flex-col gap-${isMobile ? '6' : '12'} py-${isMobile ? '4' : '8'}`}>
      <Hero />
      <PremiumTitle />
      <FeatureShowcase />
    </div>
  );
}