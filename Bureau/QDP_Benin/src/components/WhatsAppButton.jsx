import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappNumber = "+22900000000"; // Placeholder, would be real number
  const message = encodeURIComponent("Bonjour Quick Délices Plus ! Je souhaite passer une commande.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:p-5"
      aria-label="Commander sur WhatsApp"
    >
      <MessageCircle size={28} className="md:w-8 md:h-8" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/50"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
