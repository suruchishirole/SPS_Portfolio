import React, { useEffect, useRef } from 'react';
import './BackgroundEffects.css';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w, h, particles = [];
    const mouse = { x: null, y: null, active: false };
    const COUNT = window.innerWidth < 768 ? 45 : 90;

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    function init(){
      resize();
      particles = Array.from({length:COUNT}, () => ({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
      }));
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > w) p.vx *= -1;
        if(p.y < 0 || p.y > h) p.vy *= -1;
        if(mouse.active){
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const dist = Math.hypot(dx,dy);
          if(dist < 130){
            const f = (130-dist)/130*0.03;
            p.vx += (dx/dist)*f; p.vy += (dy/dist)*f;
          }
        }
        p.vx *= 0.99; p.vy *= 0.99;
      });
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x-b.x, a.y-b.y);
          if(dist < 120){
            ctx.strokeStyle = `rgba(0,240,255,${0.10*(1-dist/120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
        if(mouse.active){
          const dist = Math.hypot(particles[i].x-mouse.x, particles[i].y-mouse.y);
          if(dist < 160){
            ctx.strokeStyle = `rgba(121,40,202,${0.22*(1-dist/160)})`;
            ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(232,235,242,0.5)';
        ctx.beginPath(); ctx.arc(particles[i].x, particles[i].y, 1.4, 0, Math.PI*2); ctx.fill();
      }
    }
    
    let raf;
    function loop(){ step(); raf = requestAnimationFrame(loop); }

    init();
    if(!REDUCED){ loop(); } else { step(); }

    const handleResize = () => resize();
    const handleMouseMove = e => { mouse.x=e.clientX; mouse.y=e.clientY; mouse.active=true; };
    const handleMouseLeave = () => { mouse.active=false; };
    const handleVisChange = () => {
      if(document.hidden){ cancelAnimationFrame(raf); } else if(!REDUCED){ loop(); }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisChange);
    };
  }, []);

  useEffect(() => {
    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!REDUCED && window.matchMedia('(pointer:fine)').matches){
      const handleSpotlightMove = e => {
        if(spotlightRef.current){
          spotlightRef.current.style.setProperty('--mx', e.clientX+'px');
          spotlightRef.current.style.setProperty('--my', e.clientY+'px');
        }
      };
      window.addEventListener('mousemove', handleSpotlightMove);
      return () => window.removeEventListener('mousemove', handleSpotlightMove);
    }
  }, []);

  return (
    <>
      <canvas id="particles" ref={canvasRef}></canvas>
      <div className="grain"></div>
      <div className="spotlight" id="spotlight" ref={spotlightRef}></div>
    </>
  );
}
