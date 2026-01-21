import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative flex items-center justify-center overflow-hidden">
        
        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                        <Quote className="w-8 h-8 text-brand-accent" />
                    </div>
                </div>

                <h2 className="text-sm font-bold tracking-[0.3em] text-brand-orange uppercase mb-8">Sobre o Trix</h2>
                
                <blockquote className="text-2xl md:text-4xl font-display text-white leading-tight md:leading-snug">
                    "O Trix nasceu da necessidade de conectar quem transporta com quem precisa produzir. Com décadas de experiência no setor logístico, entendemos que o motorista é o coração do Brasil. Nossa missão é facilitar o acesso à informação e garantir que o caminhão nunca precise <span className="text-brand-accent underline decoration-brand-accent/30 underline-offset-4">rodar vazio</span>."
                </blockquote>

                <div className="mt-12 flex items-center justify-center gap-4 opacity-60">
                    <div className="h-px w-12 bg-white"></div>
                    <span className="text-sm uppercase tracking-widest text-white">Manifesto Trix</span>
                    <div className="h-px w-12 bg-white"></div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default About;