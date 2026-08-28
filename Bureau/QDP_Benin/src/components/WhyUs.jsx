import React from 'react';
import { Truck, ShieldCheck, Banknote, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: "Livraison Flash",
    description: "Parce que la faim n'attend pas, nous livrons sur le campus en moins de 15 minutes chrono."
  },
  {
    icon: ShieldCheck,
    title: "Hygiène Garantie",
    description: "Cuisine ultra-propre, ingrédients frais du jour et respect strict des normes de sécurité."
  },
  {
    icon: Banknote,
    title: "Prix Étudiants",
    description: "La meilleure qualité au prix le plus juste. Des combos pensés pour ton budget."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <f.icon className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4">{f.title}</h3>
            <p className="text-light/60 leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
