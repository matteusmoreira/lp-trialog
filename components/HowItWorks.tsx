import React from 'react';
import { UserPlus, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: <UserPlus className="w-6 h-6" />,
      title: "Faça seu Cadastro",
      desc: "Insira seus dados básicos e as especificações do seu veículo no sistema Trix."
    },
    {
      id: "02",
      icon: <Search className="w-6 h-6" />,
      title: "Receba Oportunidades",
      desc: "Filtramos os fretes que fazem sentido para a sua localização e tipo de carga."
    },
    {
      id: "03",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Feche o Negócio",
      desc: "Negocie diretamente e siga viagem com a segurança de um sistema feito por quem entende de transporte."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-400 text-lg">
              Em apenas três passos você conecta seu caminhão às melhores cargas do mercado.
            </p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all rounded text-sm uppercase tracking-widest">
            Começar Agora
          </button>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="relative pt-4 md:pt-12"
              >
                {/* Step Marker */}
                <div className="flex items-center gap-4 mb-6 md:absolute md:top-0 md:left-0 md:-translate-y-1/2 md:flex-col md:items-start md:gap-2">
                  <div className="w-24 h-24 rounded-full bg-brand-card border border-white/10 flex items-center justify-center relative group overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors absolute scale-150">
                        {step.id}
                    </span>
                    <div className="relative z-10 text-brand-accent">
                        {step.icon}
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;