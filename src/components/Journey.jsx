import React from 'react';
import './Journey.css';

export default function Journey() {
  return (
    <section id="journey" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="reveal mb-14">
          <h2 className="font-display font-semibold text-3xl text-ink">Journey</h2>
          <p className="text-faint mt-2">Academic milestones and professional experience, in order.</p>
        </div>

        <div className="relative pl-10">
          <div className="timeline-line absolute left-[7px] top-2 bottom-2 w-[2px]"></div>
          <div className="reveal-stagger space-y-12">
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5"></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">APR 2022</p>
              <h3 className="font-display text-lg text-ink">SSC (Xth) — 91.80%</h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Jijamata English Medium School, Bhor, Pune.</p>
            </div>
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5"></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">July 2022 - MAY 2025</p>
              <h3 className="font-display text-lg text-ink">Diploma, Computer Engineering — 94.17%</h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Rajgad Dnyanpeeth Technical Campus (MSBTE), Bhor, Pune.</p>
            </div>
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5"></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">JUN - JUL 2024</p>
              <h3 className="font-display text-lg text-ink">Java Full Stack Development Intern</h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Innovatus Technologies — worked on Java and MySQL-based applications, strengthening full-stack fundamentals.</p>
            </div>
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5"></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">JUL 2025 - June 2028</p>
              <h3 className="font-display text-lg text-ink">Began B.E., Computer Engineering</h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Pune Vidyarthi Griha's College of Engineering, Technology and Management (SPPU) — 8.73 CGPA, 3rd semester.</p>
            </div>
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5" style={{borderColor:'#00DF89'}}></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">AUG 2025 — PRESENT</p>
              <h3 className="font-display text-lg text-ink flex items-center gap-2">Apprenticeship <span className="status-dot"></span></h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Innovatus Technologies — hands-on experience in software development and professional engineering practices.</p>
            </div>
            <div className="relative">
              <div className="node-dot absolute -left-10 top-1.5" style={{borderColor:'#7928CA'}}></div>
              <p className="font-mono text-[0.7rem] text-faint mb-1">RECOGNITION</p>
              <h3 className="font-display text-lg text-ink">Research paper &amp; competition wins</h3>
              <p className="text-sm text-[#B7BDD0] mt-1">Published "Pariksha Nirikshak" in IJSRED; prizes in project, poster, and paper presentation competitions; Inter-Zonal Level Chess Player.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
