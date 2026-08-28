import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
