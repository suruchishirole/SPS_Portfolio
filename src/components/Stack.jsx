import React, { useState, useRef, useEffect } from 'react';
import './Stack.css';

export default function Stack() {
  const [activeTab, setActiveTab] = useState('lang');
  const [highlightStyle, setHighlightStyle] = useState({ left: '6px', width: '0px' });
  const tabsRef = useRef({});

  useEffect(() => {
    const activeEl = tabsRef.current[activeTab];
    if (activeEl) {
      setHighlightStyle({
        left: `${activeEl.offsetLeft}px`,
        width: `${activeEl.offsetWidth}px`
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      const activeEl = tabsRef.current[activeTab];
      if (activeEl) {
        setHighlightStyle({
          left: `${activeEl.offsetLeft}px`,
          width: `${activeEl.offsetWidth}px`
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <section id="stack" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-10">
          <h2 className="font-display font-semibold text-3xl text-ink">Stack matrix</h2>
          <h3><i>A curated stack focused on backend stability and clean full-stack execution—from core Java logic to dynamic front-end interfaces</i></h3>
          <p className="text-faint mt-2 max-w-md mt-5"><i>Hover any badge for where it's actually been used.</i></p>
        </div>

        <div className="reveal relative inline-flex flex-wrap gap-1 p-1.5 rounded-full glass mb-10" id="tabs">
          <div className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-cyan to-emerald transition-all duration-300 ease-out" style={highlightStyle}></div>
          <button ref={el => tabsRef.current['lang'] = el} onClick={() => setActiveTab('lang')} className={`tab-btn ${activeTab === 'lang' ? 'active' : ''}`}>Languages</button>
          <button ref={el => tabsRef.current['web'] = el} onClick={() => setActiveTab('web')} className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}>Web &amp; Database</button>
          <button ref={el => tabsRef.current['ai'] = el} onClick={() => setActiveTab('ai')} className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}>AI &amp; Tools</button>
        </div>

        <div className="reveal">
          <div className={`tab-panel flex flex-wrap gap-3 ${activeTab !== 'lang' ? 'hidden' : ''}`}>
            <div className="badge-chip" data-c="cyan">C<span className="tooltip">Foundational systems &amp; DSA coursework at diploma and degree level.</span></div>
            <div className="badge-chip" data-c="cyan">C++<span className="tooltip">Core OOP concepts — certified via Great Learning Academy.</span></div>
            <div className="badge-chip" data-c="cyan">Java<span className="tooltip">Primary language — Grocery Shop System, ContactHub, and full-stack internship work.</span></div>
            <div className="badge-chip" data-c="cyan">Python<span className="tooltip">Used across AI/ML and computer-vision projects, incl. Pariksha Nirikshak.</span></div>
            <div className="badge-chip" data-c="cyan">JavaScript<span className="tooltip">Front-end interactivity paired with HTML/CSS/PHP builds.</span></div>
          </div>
          <div className={`tab-panel flex flex-wrap gap-3 ${activeTab !== 'web' ? 'hidden' : ''}`}>
            <div className="badge-chip" data-c="violet">HTML<span className="tooltip">Markup for full-stack web builds.</span></div>
            <div className="badge-chip" data-c="violet">CSS<span className="tooltip">Styling for full-stack web builds.</span></div>
            <div className="badge-chip" data-c="violet">PHP<span className="tooltip">Server-side scripting, Front End Development coursework.</span></div>
            <div className="badge-chip" data-c="violet">MySQL<span className="tooltip">Relational schema design &amp; CRUD ops — Grocery Shop System, ContactHub.</span></div>
            <div className="badge-chip" data-c="violet">MongoDB<span className="tooltip">NoSQL data modeling.</span></div>
          </div>
          <div className={`tab-panel flex flex-wrap gap-3 ${activeTab !== 'ai' ? 'hidden' : ''}`}>
            <div className="badge-chip" data-c="emerald">Computer Vision<span className="tooltip">Real-time behavior analysis for Pariksha Nirikshak; object detection &amp; tracking.</span></div>
            <div className="badge-chip" data-c="emerald">Pattern Recognition<span className="tooltip">Cheating-behavior detection logic in Pariksha Nirikshak.</span></div>
            <div className="badge-chip" data-c="emerald">ML Fundamentals<span className="tooltip">Infosys Springboard AI-Primer, 6 certified courses.</span></div>
            <div className="badge-chip" data-c="emerald">Deep Learning<span className="tooltip">Applied in the real-time object detection &amp; tracking system.</span></div>
            <div className="badge-chip" data-c="emerald">NetBeans IDE<span className="tooltip">Built the Grocery Shop System (NetBeans 8.2 + MySQL).</span></div>
          </div>
        </div>

        <div className="reveal mt-14">
          <p className="font-mono text-[0.7rem] text-faint mb-4">CERTIFICATIONS</p>
          <div className="flex flex-wrap gap-3">
            <div className="badge-chip !font-body" data-c="violet"><i data-lucide="award" className="w-3.5 h-3.5"></i>Java &amp; MySQL Database — Innovatus Technologies</div>
            <div className="badge-chip !font-body" data-c="cyan"><i data-lucide="award" className="w-3.5 h-3.5"></i>Front End Development — Great Learning Academy</div>
            <div className="badge-chip !font-body" data-c="violet"><i data-lucide="award" className="w-3.5 h-3.5"></i>Full Stack Java &amp; Python — Innovatus Technologies</div>
            <div className="badge-chip !font-body" data-c="cyan"><i data-lucide="award" className="w-3.5 h-3.5"></i>OOP Concepts in C++ — Great Learning Academy</div>
            <div className="badge-chip !font-body" data-c="emerald"><i data-lucide="award" className="w-3.5 h-3.5"></i>AI-Primer (6 courses) — Infosys Springboard</div>
            <div className="badge-chip !font-body" data-c="emerald"><i data-lucide="award" className="w-3.5 h-3.5"></i>AI, ML &amp; Deep Learning — Innovatus Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
