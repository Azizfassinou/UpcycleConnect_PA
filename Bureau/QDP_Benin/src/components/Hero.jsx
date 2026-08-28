import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, ShieldCheck, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      {/* Background Media Placeholder (In a real app, this would be a video tag) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000" 
          alt="Delicious Grilled Meat" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            🔥 Dark Kitchen d'Elite
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1]">
            Le Kebab N°1 <br />
            <span className="text-primary italic">du Campus.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-light/80 mb-10 max-w-xl font-medium leading-relaxed">
            Rapide - Qualité - Abordabilité. Le goût authentique qui alimente les étudiants d'Abomey-Calavi et Cotonou. Zoca à ta porte en 15min.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#menu" 
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Commander sur WhatsApp
            </a>
            <a 
              href="#why-us" 
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-center font-bold"
            >
              Découvrir QDP
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold">Livraison &lt;15min</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold">Hygiène 100%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
