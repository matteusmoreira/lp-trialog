import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-screen">
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0 bg-brand-dark bg-[size:50px_50px] bg-grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Logo removed here as requested */}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-brand-accent text-xs font-bold tracking-wider uppercase">Logística Inteligente</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Sua próxima <br />
              <span className="text-brand-accent">
                carga está no Trix.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white mb-8 max-w-lg leading-relaxed border-l-2 border-brand-accent/50 pl-6">
              Conectamos motoristas autônomos as oportunidades de frete dos nossos clientes em todo o Brasil. Não importa o seu veículo, nós temos o destino certo para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onCtaClick}
                className="group relative px-8 py-4 bg-brand-accent text-white font-display font-bold text-lg uppercase tracking-wide overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] hover:scale-105 transition-all duration-300 border border-brand-accent rounded-sm"
              >
                <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative flex items-center gap-2 group-hover:text-brand-accent transition-colors duration-300">
                  Quero me cadastrar <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Visual/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Orange Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-4 shadow-2xl">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-transparent z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
                    alt="Truck on highway" 
                    className="w-full h-full object-cover rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 
                 {/* Floating UI Elements */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-8 right-8 bg-black/80 border border-brand-accent/50 p-4 rounded-lg backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                 >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center font-bold text-black text-xs">SP</div>
                        <div className="h-[2px] w-12 bg-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-brand-accent w-1/2 animate-[shimmer_2s_infinite]"></div>
                        </div>
                        <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-bold text-black text-xs">BA</div>
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">Rota Otimizada</div>
                 </motion.div>

                 <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 left-8 bg-black/80 border-l-4 border-brand-accent p-4 pr-8 rounded-r-lg backdrop-blur-md shadow-lg"
                 >
                    <div className="text-xs text-brand-accent uppercase font-bold mb-1">Status da Carga</div>
                    <div className="text-lg font-display font-bold text-white tracking-wide">Disponível</div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;