import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diferenciais', id: 'features' },
    { name: 'Como Funciona', id: 'how-it-works' },
    { name: 'Sobre', id: 'about' },
  ];

  // Custom Logo Component to match the image
  const TrixLogo = () => (
    <div className="flex items-center gap-2">
      {/* Abstract Geometric Symbol based on the image (Orange) */}
      <div className="w-8 h-8 relative flex items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M4 4H16V12H12V28H4V4Z" fill="#F97316"/>
            <path d="M20 4H28V16H20V4Z" fill="#F97316"/>
        </svg>
      </div>
      {/* Text: TRI (White) X (Orange) */}
      <div className="font-display font-black text-2xl tracking-wider leading-none">
        <span className="text-white">TRI</span>
        <span className="text-brand-accent">X</span>
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg shadow-brand-accent/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => onNavigate('hero')}>
          <TrixLogo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.id)}
              className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate('register')}
            className="relative px-6 py-2 bg-transparent text-white font-semibold group overflow-hidden"
          >
             <span className="absolute inset-0 w-full h-full bg-brand-accent skew-x-[-12deg] group-hover:bg-brand-glow transition-colors duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]"></span>
             <span className="relative uppercase tracking-wide text-sm">Acesso Parceiro</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand-accent transition-colors"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 border-b border-white/5 font-display"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('register');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-brand-accent text-white font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              >
                Acesso Parceiro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;