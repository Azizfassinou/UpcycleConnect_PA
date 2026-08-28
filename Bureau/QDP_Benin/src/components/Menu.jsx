import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import menuData from '../data/menu.json';

const Menu = () => {
  const whatsappNumber = "+22900000000"; // Placeholder
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'Kebab', 'Box', 'Boissons'];

  const filteredItems = activeCategory === 'Tous' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-dark">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Le Menu</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">Prêt à kiffer ?</h2>
          <p className="mt-4 text-light/60 text-base sm:text-lg">
            Nos recettes sont préparées à la commande pour garantir une fraîcheur et une chaleur maximale.
          </p>
        </div>
        
        {/* Categories Bar */}
        <div className="flex gap-3 overflow-x-auto pb-4 w-full lg:w-auto scrollbar-hide no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`relative whitespace-nowrap px-6 py-2.5 rounded-full border text-sm font-bold transition-all shadow-lg ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-dark scale-105' 
                  : 'border-white/10 text-white/60 hover:border-white/30 bg-white/5'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full z-[-1]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card group h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-dark font-black px-4 py-1 rounded-full text-sm shadow-lg">
                  {item.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <ShoppingBag className="text-primary w-12 h-12" />
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-primary/70 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-2xl font-black mt-2 mb-3">{item.name}</h3>
                <p className="text-light/60 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.whatsapp_msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary !py-3 text-sm mt-auto"
                >
                  <MessageCircle size={18} />
                  Commander maintenant
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Menu;
