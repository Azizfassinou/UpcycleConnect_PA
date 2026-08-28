import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="sm:col-span-2 lg:col-span-2">
          <h2 className="text-3xl font-black text-primary mb-6">QDP<span className="text-white">+</span></h2>
          <p className="text-light/50 max-w-sm mb-8 leading-relaxed">
            Quick Délices Plus (QDP) révolutionne la street food béninoise avec des kebabs premium servis en un temps record. 
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Zones de Livraison</h4>
          <ul className="space-y-4 text-light/50 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Abomey-Calavi (Zoca, IITA, Arcon)
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Cotonou (Cadjehoun, Fidjrossè)
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Akpakpa & Environs
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Rapid</h4>
          <ul className="space-y-4 text-light/50 text-sm font-medium">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +229 01 00 00 00 00
            </li>
            <li>Ouvert 7j/7</li>
            <li>10h00 - 02h00</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-light/30 text-xs">
        <p>© 2024 Quick Délices Plus. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
