import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const terminalRef = useRef(null);
  
  useEffect(() => {
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = terminalRef.current;
    if(!el) return;
    
    let isCancelled = false;
    
    const lines = [
      { p:'$ ', c:'whoami', delay:35 },
      { p:'> ', c:'suruchi_shirole — comp_eng_student', out:true },
      { p:'$ ', c:'cat focus.json', delay:35 },
      { p:'', c:'{ "degree": "B.E. Computer Engineering, SPPU",', out:true },
      { p:'', c:'  "focus": ["Java Full-Stack","AI/ML","Systems"] }', out:true },
      { p:'$ ', c:'git log --oneline -3', delay:35 },
      { p:'> ', c:'a3f21c9 anti-cheating detection module', out:true },
      { p:'> ', c:'9d84e1 optimize MySQL schema — ContactHub', out:true },
      { p:'$ ', c:'status --apprenticeship', delay:35 },
      { p:'> ', c:'ACTIVE @ Innovatus Technologies', out:true, cls:'text-emerald' },
    ];

    async function typeLine(line){
      if(isCancelled) return;
      const row = document.createElement('div');
      row.className = 'whitespace-pre-wrap ' + (line.cls || '');
      const prompt = document.createElement('span');
      prompt.className = 'text-cyan';
      prompt.textContent = line.p;
      row.appendChild(prompt);
      const textSpan = document.createElement('span');
      row.appendChild(textSpan);
      el.appendChild(row);

      if(REDUCED || line.out){
        textSpan.textContent = line.c;
      } else {
        for(let i=0;i<line.c.length;i++){
          if(isCancelled) break;
          textSpan.textContent += line.c[i];
          await new Promise(r => setTimeout(r, line.delay || 12));
        }
      }
      el.scrollTop = el.scrollHeight;
    }

    async function runLoop(){
      if(isCancelled) return;
      el.innerHTML = '';
      for(const line of lines){
        if(isCancelled) break;
        await typeLine(line);
        await new Promise(r => setTimeout(r, line.out ? 90 : 260));
      }
      if(!isCancelled){
        await new Promise(r => setTimeout(r, 2200));
        if(!REDUCED && !isCancelled) runLoop();
      }
    }
    
    runLoop();
    
    return () => { isCancelled = true; };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div id="hero-copy">
          <div className="reveal in inline-flex items-center gap-2 font-mono text-[0.72rem] text-cyan/90 border border-cyan/25 bg-cyan/5 rounded-full px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            SYS_INIT :: COMP_ENG_STUDENT // SPPU
          </div>

          <h1 className="reveal in font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink mb-6" style={{transitionDelay:'80ms'}}>
            Full-stack systems, built in Java — with AI where it earns its place.
          </h1>

          <p className="reveal in text-[#B7BDD0] text-base sm:text-lg leading-relaxed max-w-xl mb-9" style={{transitionDelay:'160ms'}}>
            I'm a Computer Engineering student at SPPU, currently apprenticing at Innovatus Technologies.
            I build full-stack Java applications, real-time computer vision tools, and clean relational
            databases — grounded in a 94.17% diploma record and a published research paper.
          </p>

          <div className="reveal in flex flex-wrap items-center gap-4" style={{transitionDelay:'240ms'}}>
            <a href="#projects" className="btn-primary magnetic">
              View Projects <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
            </a>
            <a href="#contact" className="btn-secondary magnetic">
              Get In Touch
            </a>
          </div>

          <div className="reveal in flex items-center gap-6 mt-12 pt-8 border-t border-white/5" style={{transitionDelay:'320ms'}}>
            <div>
              <p className="font-display text-2xl text-ink">9.23</p>
              <p className="font-mono text-[0.68rem] text-faint mt-1">SGPA · Sem 4, B.E.</p>
            </div>
            <div className="w-px h-9 bg-white/10"></div>
            <div>
              <p className="font-display text-2xl text-ink">94.17%</p>
              <p className="font-mono text-[0.68rem] text-faint mt-1">Diploma · MSBTE</p>
            </div>
            <div className="w-px h-9 bg-white/10"></div>
            <div>
              <p className="font-display text-2xl text-ink">4</p>
              <p className="font-mono text-[0.68rem] text-faint mt-1">Shipped projects</p>
            </div>
          </div>
        </div>

        <div className="reveal in" style={{transitionDelay:'200ms'}}>
          <div className="glass-strong glow-ring rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></span>
              <span className="ml-3 font-mono text-[0.7rem] text-faint">suruchi@innovatus:~</span>
            </div>
            <div ref={terminalRef} id="terminal" className="font-mono text-[0.8rem] leading-relaxed p-5 h-64 overflow-hidden text-[#B7BDD0]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
