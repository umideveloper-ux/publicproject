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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFairy, setShowFairy] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

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

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Navbar />
              <FloatingFeather />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dersler" element={<Lessons />} />
                <Route path="/testler" element={<Tests />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
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