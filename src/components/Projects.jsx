import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-14">
          <h2 className="font-display font-semibold text-3xl text-ink">Flagship projects</h2>
          <p className="text-faint mt-2 max-w-xl">A curated selection of my most impactful builds—focusing on clean system design, scalable backends, and seamless user experiences.</p>
        </div>

        <div className="space-y-6">
          <div className="reveal glass rounded-2xl p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-8 items-start hover:border-white/20 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.68rem] text-violet border border-violet/30 bg-violet/5 rounded-full px-2.5 py-1">Published Research @IJSRED</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-3">Pariksha Nirikshak — Anti-Cheating System for Examination using AI</h3>
              <p className="text-sm text-[#B7BDD0] leading-relaxed mb-4 max-w-2xl">
                An AI-powered monitoring system for offline examinations. Uses computer vision and pattern
                recognition to analyse student behaviour in real time and flag potential cheating attempts —
                the underlying approach was published as a research paper in IJSRED.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-chip" data-c="emerald">AI</span>
                <span className="badge-chip" data-c="emerald">Python</span>
                <span className="badge-chip" data-c="emerald">Computer Vision</span>
                <span className="badge-chip" data-c="emerald">Pattern Recognition</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <a href="https://github.com/suruchishirole/ParikshaNirikshak" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-xs whitespace-nowrap magnetic mt-4">
                <i data-lucide="github" className="w-3.5 h-3.5"></i> GitHub Repository
              </a>
              <a href="https://www.ijsred.com/volume8/issue2/IJSRED-V8I2P189.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-xs whitespace-nowrap magnetic mt-4">
                <i data-lucide="github" className="w-3.5 h-3.5"></i> View Publication ↗
                {/* Code for ↗ : Decimal code: &#8599; , Hex code: &#x2197; */}
              </a>
            </div>
          </div>

          <div className="reveal glass rounded-2xl p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-8 items-start hover:border-white/20 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.68rem] text-cyan border border-cyan/30 bg-cyan/5 rounded-full px-2.5 py-1">Full-Stack Java</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-3">ContactHub</h3>
              <p className="text-sm text-[#B7BDD0] leading-relaxed mb-4 max-w-2xl">
                A contact management system built with Java and MySQL, with efficient CRUD operations and
                secure handling of contact data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-chip" data-c="cyan">Java</span>
                <span className="badge-chip" data-c="cyan">Java Swing</span>
                <span className="badge-chip" data-c="cyan">MySQL</span>
                <span className="badge-chip" data-c="cyan">CRUD</span>
              </div>
            </div>
            <a href="https://github.com/suruchishirole/ContactHub" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-xs whitespace-nowrap magnetic mt-4">
              <i data-lucide="github" className="w-3.5 h-3.5"></i> GitHub Repository
            </a>
          </div>

          <div className="reveal glass rounded-2xl p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-8 items-start hover:border-white/20 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.68rem] text-emerald border border-emerald/30 bg-emerald/5 rounded-full px-2.5 py-1">AI / Computer Vision</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-3">Object Detection &amp; Tracking</h3>
              <p className="text-sm text-[#B7BDD0] leading-relaxed mb-4 max-w-2xl">
                A real-time object detection and tracking system combining computer vision techniques with
                deep learning models.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-chip" data-c="emerald">Python</span>
                <span className="badge-chip" data-c="emerald">Deep Learning</span>
                <span className="badge-chip" data-c="emerald">Computer Vision</span>
              </div>
            </div>
            <a href="https://github.com/suruchishirole/Object-Detection-and-Tracking" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-xs whitespace-nowrap magnetic mt-4">
              <i data-lucide="github" className="w-3.5 h-3.5"></i> GitHub Repository
            </a>
          </div>

          <div className="reveal glass rounded-2xl p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-8 items-start hover:border-white/20 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[0.68rem] text-cyan border border-cyan/30 bg-cyan/5 rounded-full px-2.5 py-1">Full-Stack Java</span>
              </div>
              <h3 className="font-display text-xl text-ink mb-3">Grocery Shop System</h3>
              <p className="text-sm text-[#B7BDD0] leading-relaxed mb-4 max-w-2xl">
                A desktop application built in Java (NetBeans 8.2) with a MySQL backend to streamline grocery
                shop operations — a user-friendly interface for managing inventory and admin information.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-chip" data-c="cyan">Java</span>
                <span className="badge-chip" data-c="cyan">NetBeans</span>
                <span className="badge-chip" data-c="cyan">MySQL</span>
              </div>
            </div>
            <a href="https://github.com/suruchishirole" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-xs whitespace-nowrap magnetic mt-4">
              <i data-lucide="github" className="w-3.5 h-3.5"></i> GitHub Repository
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
