import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (isLoading) return;
    setIsLoading(true);
    
    // Simulating a form submission or redirection delay
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle the actual registration logic or navigation
      // e.g., window.location.href = '/register';
    }, 2000);
  };

  return (
    <footer id="register" className="bg-brand-card border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent shadow-[0_0_30px_rgba(249,115,22,0.6)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-brand-accent/10 to-brand-dark border border-brand-accent/20 rounded-3xl p-8 md:p-16 text-center mb-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Pronto para acelerar com o <span className="text-brand-accent">Trix</span>?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Junte-se à nossa rede de parceiros e transforme a gestão dos seus fretes.
                </p>
                <button 
                  onClick={handleRegister}
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform ${
                    isLoading 
                      ? 'opacity-80 cursor-wait' 
                      : 'hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1'
                  }`}
                >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processando...</span>
                      </>
                    ) : (
                      <>
                        Cadastrar meu Veículo <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                </button>
            </div>
        </div>

        {/* Logo and Description - Centered */}
        <div className="border-t border-white/10 pt-12 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 relative">
                     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M4 4H16V12H12V28H4V4Z" fill="#F97316"/>
                        <path d="M20 4H28V16H20V4Z" fill="#F97316"/>
                    </svg>
                </div>
                <div className="font-display font-black text-2xl tracking-wider leading-none">
                    <span className="text-white">TRI</span>
                    <span className="text-brand-accent">X</span>
                </div>
            </div>

            <p className="text-white/90 text-sm leading-relaxed max-w-lg mx-auto">
                Inovação e tecnologia para quem movimenta o Brasil. Conectando oportunidades, reduzindo custos e maximizando lucros para caminhoneiros autônomos.
            </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-white/5 text-white/50 text-xs flex flex-col md:flex-row items-center justify-center gap-1">
            <span>© 2026 TRIX. Todos os direitos Reservados.</span>
            <span className="hidden md:inline">|</span>
            <span>Orgulhosamente criado por: <span className="text-white hover:text-brand-accent transition-colors font-medium">Matteus Moreira</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;