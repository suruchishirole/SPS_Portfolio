import React, { useEffect } from 'react';
import './Header.css';

export default function Header({ setCmdOpen }) {
  useEffect(() => {
    const sections = ['home','profile','stack','projects','journey','contact'].map(id => document.getElementById(id));
    const navLinks = document.querySelectorAll('[data-nav]');
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          navLinks.forEach(l => {
            const isActive = l.getAttribute('href') === '#'+entry.target.id;
            if(isActive) l.classList.add('active');
            else l.classList.remove('active');
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(s => s && navIO.observe(s));
    
    return () => {
      sections.forEach(s => s && navIO.unobserve(s));
    }
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-3xl">
      <nav className="glass-strong glow-ring rounded-full flex items-center justify-between gap-3 pl-5 pr-2.5 py-2.5">
        <a href="#home" className="font-display font-semibold text-sm tracking-tight text-ink whitespace-nowrap">SS<span className="text-cyan">.</span></a>

        <div className="hidden md:flex items-center gap-1.5 rounded-full border border-white/5 px-1.5 py-1">
          <span className="status-dot"></span>
          <span className="font-mono text-[0.7rem] text-faint pr-1">Available for engineering roles</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 px-2">
          <a href="#profile" className="nav-link" data-nav="true">Profile</a>
          <a href="#stack" className="nav-link" data-nav="true">Stack</a>
          <a href="#projects" className="nav-link" data-nav="true">Projects</a>
          <a href="#journey" className="nav-link" data-nav="true">Journey</a>
          <a href="#contact" className="nav-link" data-nav="true">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setCmdOpen(true)} className="hidden sm:flex items-center gap-1.5 kbd hover:border-cyan/50 transition-colors">
            <i data-lucide="command" className="w-3 h-3"></i> K
          </button>
          <a href="Suruchi_Resume.pdf" download className="btn-secondary !py-2 !px-4 !text-xs">
            <i data-lucide="download" className="w-3.5 h-3.5"></i> Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
