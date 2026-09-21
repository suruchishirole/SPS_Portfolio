import React, { useState, useEffect, useRef } from 'react';
import './CommandPalette.css';

const ITEMS = [
  { label:'Home', hint:'Hero', href:'#home', icon:'home' },
  { label:'Profile', hint:'Bento grid', href:'#profile', icon:'user' },
  { label:'Stack', hint:'Skills matrix', href:'#stack', icon:'layers' },
  { label:'Projects', hint:'Flagship builds', href:'#projects', icon:'folder-git-2' },
  { label:'Journey', hint:'Timeline', href:'#journey', icon:'git-commit-horizontal' },
  { label:'Contact', hint:'Get in touch', href:'#contact', icon:'send' },
  { label:'Download Resume', hint:'PDF', href:'Suruchi_Shirole_Resume.pdf', icon:'download' },
];

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [filter, setFilter] = useState('');
  const inputRef = useRef(null);
  
  const filteredItems = ITEMS.filter(i => i.label.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ 
        e.preventDefault(); 
        setIsOpen(true); 
      }
      if(e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  useEffect(() => {
    if(isOpen){
      setFilter('');
      setTimeout(() => inputRef.current?.focus(), 50);
      if(window.lucide) window.lucide.createIcons();
    }
  }, [isOpen]);
  
  useEffect(() => {
    if(isOpen && window.lucide) window.lucide.createIcons();
  }, [filter, isOpen]);

  const go = (href) => {
    setIsOpen(false);
    if(href.endsWith('.pdf')){ window.open(href, '_blank'); }
    else{ 
      const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.querySelector(href)?.scrollIntoView({ behavior: REDUCED ? 'auto':'smooth' }); 
    }
  };

  const handleInputKey = (e) => {
    if(e.key === 'Enter' && filteredItems.length > 0){
      go(filteredItems[0].href);
    }
  };

  return (
    <div id="cmdk-backdrop" className={isOpen ? 'open' : ''} onClick={(e) => { if(e.target.id === 'cmdk-backdrop') setIsOpen(false); }}>
      <div className="glass-strong rounded-2xl w-[90%] max-w-lg overflow-hidden glow-ring">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <i data-lucide="terminal" className="w-4 h-4 text-cyan"></i>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Jump to a section..." 
            className="bg-transparent flex-1 outline-none text-sm font-mono text-ink placeholder:text-[#5C6478]" 
            value={filter}
            onChange={e => setFilter(e.target.value)}
            onKeyDown={handleInputKey}
          />
          <span className="kbd">esc</span>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2 text-sm">
          {filteredItems.map((i, idx) => (
            <li 
              key={i.label} 
              onClick={() => go(i.href)}
              className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer hover:bg-white/5 text-[#CDD3E2] ${idx===0 ? 'bg-white/5':''}`}
            >
              <i data-lucide={i.icon} className="w-4 h-4 text-cyan"></i>
              <span className="text-sm">{i.label}</span>
              <span className="ml-auto font-mono text-[0.65rem] text-faint">{i.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
