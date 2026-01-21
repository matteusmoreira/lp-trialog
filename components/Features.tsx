import React from 'react';
import { Truck, Map, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Para Todos os Perfis",
      description: "Do utilitário leve à carreta bitrem. Temos oportunidades para todos os tipos de veículos e implementos.",
      color: "text-blue-400",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Abrangência Nacional",
      description: "Tenha acesso a ofertas de frete em todos os estados do Brasil, otimizando sua rota e evitando viagens vazias.",
      color: "text-orange-400",
      borderColor: "group-hover:border-orange-500/50"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Cadastro Simplificado",
      description: "Um sistema direto e sem complicações. Cadastre-se uma vez e comece a receber propostas que se encaixam no seu perfil.",
      color: "text-purple-400",
      borderColor: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Por que escolher o <span className="text-brand-accent">TRIX?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`group p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 ${feature.borderColor} hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className={`mb-6 p-4 rounded-xl bg-white/5 inline-block ${feature.color} ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;