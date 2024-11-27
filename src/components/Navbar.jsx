import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useResponsiveLayout } from '../utils/hooks';
import Container from './layout/Container';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const layout = useResponsiveLayout();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
    padding: `${layout.getSpacing(8)}px 0`
  };

  const logoStyle = {
    fontSize: layout.getFontSize(24),
    letterSpacing: '0.05em'
  };

  const menuItemStyle = {
    fontSize: layout.getFontSize(16),
    padding: `${layout.getSpacing(8)}px ${layout.getSpacing(16)}px`
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(12px)',
    padding: layout.getSpacing(16),
    display: isMobileMenuOpen ? 'block' : 'none'
  };

  const menuItems = [
    { to: '/', label: 'Ana Sayfa' },
    { to: '/dersler', label: 'Dersler' },
    { to: '/testler', label: 'Testler' },
    { to: '/faq', label: 'SSS' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={navStyle}
    >
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: layout.getSpacing(8) }}>
            <FaCarAlt style={{ fontSize: layout.getFontSize(24), color: '#3B82F6' }} />
            <motion.span 
              style={logoStyle}
              className="font-bold text-[#4df0ff]"
              animate={{
                textShadow: [
                  "0 0 2px #fff, 0 0 5px #4df0ff, 0 0 8px #4df0ff",
                  "0 0 1px #fff, 0 0 3px #4df0ff, 0 0 5px #4df0ff"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              EHLİYET ALIYORUM.COM
            </motion.span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center" style={{ gap: layout.getSpacing(32) }}>
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={menuItemStyle}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ fontSize: layout.getFontSize(24) }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={mobileMenuStyle} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: layout.getSpacing(16) }}>
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={menuItemStyle}
                className="text-gray-300 hover:text-white transition-colors block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </motion.nav>
  );
}