import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-dark text-xl group-hover:rotate-12 transition-transform">
            Q
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter">
            QUICK<span className="text-primary italic">DÉLICES</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-widest">
          <a href="#menu" className="hover:text-primary transition-colors">Le Menu</a>
          <a href="#why-us" className="hover:text-primary transition-colors">Pourquoi QDP ?</a>
          <a href="#" className="hover:text-primary transition-colors">Notre Story</a>
          <a href="#menu" className="bg-primary text-dark px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95 shadow-lg shadow-primary/20">Commander</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-dark z-[-1] overflow-y-auto pt-[100px] pb-10 px-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black border-b border-white/5 pb-4">Le Menu</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black border-b border-white/5 pb-4">Pourquoi QDP ?</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-black border-b border-white/5 pb-4">Notre Story</a>
          </div>
          
          <div className="mt-auto pt-10">
            <a 
              href="#menu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-xl"
            >
              Passer une commande
            </a>
            
            <p className="mt-8 text-center text-light/40 text-sm font-medium">
              Ouvert 7j/7 • Abomey-Calavi & Cotonou
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
