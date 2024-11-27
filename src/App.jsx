import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Tests from './pages/Tests';
import FAQ from './pages/FAQ';
import LoadingScreen from './components/LoadingScreen';
import MagicTransition from './components/MagicTransition';
import FloatingFeather from './components/premium/FloatingFeather';
import MagicalFairy from './components/premium/MagicalFairy';
import Container from './components/layout/Container';
import { useResponsiveLayout } from './utils/hooks';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFairy, setShowFairy] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const layout = useResponsiveLayout();

  const handleLoadingComplete = () => {
    setShowFairy(true);
    setIsLoading(false);
  };

  const handleFairyComplete = () => {
    setShowFairy(false);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  const mainStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #000000 0%, #111827 100%)',
    color: 'white',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: layout.getSpacing(24)
  };

  return (
    <Router>
      <div style={mainStyle}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Navbar />
              <Container>
                <div style={contentStyle}>
                  <FloatingFeather />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dersler" element={<Lessons />} />
                    <Route path="/testler" element={<Tests />} />
                    <Route path="/faq" element={<FAQ />} />
                  </Routes>
                </div>
              </Container>
            </>
          )}
        </AnimatePresence>
        
        {showFairy && (
          <MagicalFairy onComplete={handleFairyComplete} />
        )}
        
        {showTransition && (
          <MagicTransition onComplete={handleTransitionComplete} />
        )}
      </div>
    </Router>
  );
}