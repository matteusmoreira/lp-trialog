import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white font-sans text-gray-100">
      
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-brand-dark to-brand-dark opacity-80"></div>
         {/* Top Right Orange Glow */}
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px]"></div>
         {/* Bottom Left Orange Glow */}
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <Navbar onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        <Hero onCtaClick={() => scrollToSection('register')} />
        <Features />
        <HowItWorks />
        <About />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;