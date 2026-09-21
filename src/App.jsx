import React, { useEffect, useState } from 'react';
import './App.css';
import BackgroundEffects from './components/BackgroundEffects';
import CommandPalette from './components/CommandPalette';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    // Initialize Lucide icons globally on mount and updates
    if (window.lucide) {
      window.lucide.createIcons();
    }

    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll Reveal Observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ 
          entry.target.classList.add('in'); 
          io.unobserve(entry.target); 
        }
      });
    }, { threshold:0.15 });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

    // Magnetic Buttons
    if(!REDUCED){
      document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width/2;
          const y = e.clientY - r.top - r.height/2;
          btn.style.transform = `translate(${x*0.18}px, ${y*0.35}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
      });
    }

    // Update icons periodically just in case dynamic content loaded
    const interval = setInterval(() => {
      if (window.lucide) window.lucide.createIcons();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-mesh">
      <BackgroundEffects />
      <CommandPalette isOpen={cmdOpen} setIsOpen={setCmdOpen} />
      <Header setCmdOpen={setCmdOpen} />
      <main className="relative z-10">
        <Hero />
        <Profile />
        <Stack />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
