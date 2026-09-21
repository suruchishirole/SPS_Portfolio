import React, { useEffect } from 'react';
import './Profile.css';

export default function Profile() 
{
  useEffect(() => {
    const cards = document.querySelectorAll('.card-bento');
    const handleMove = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX-r.left)+'px');
      card.style.setProperty('--my', (e.clientY-r.top)+'px');
    };
    cards.forEach(card => card.addEventListener('mousemove', handleMove));
    return () => cards.forEach(card => card.removeEventListener('mousemove', handleMove));
  }, []);

  return (
    // Reduced horizontal padding slightly (px-4 md:px-6) to use more screen width
    <section id="profile" className="px-4 md:px-6 py-24">
      {/* Increased max-width from 6xl to 1400px to expand horizontally */}
      <div className="max-w-[1300px] mx-auto">
        <div className="reveal flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-display font-semibold text-3xl text-ink">Engineering profile</h2>
            <p className="text-faint mt-2 max-w-2xl">"An overview of where I stand today. This covers my university coursework, professional apprenticeship, and the architectural principles that guide my code."</p>
          </div>
        </div>

        <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[260px]">
          
          {/* Card 1: ID Card */}
          <div className="card-bento glass rounded-2xl p-6 md:row-span-2 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] text-faint">About_Me</span>
              <i data-lucide="badge-check" className="w-4 h-4 text-emerald"></i>
            </div>
            <div className="flex flex-col items-center text-center gap-4 my-4">
              {/* Increased size from w-28 to w-36 */}
              <div className="relative w-60 h-60 mt-1">
                <div className="absolute inset-0 rounded-full" style={{background:'conic-gradient(from 0deg, #00F0FF, #7928CA, #00DF89, #f83e92)', filter:'blur(2px)', animation:'spin 6s linear infinite'}}></div>
                <div className="absolute inset-[3px] rounded-full bg-[#0A0E17] flex items-center justify-center overflow-hidden">
                  {/* Replace '/your-photo.jpg' with your actual image path */}
                  <img src="/SPS_ProfessionalPhoto.jpg" alt="Suruchi Shirole" className="w-full h-full object-cover rounded-full border-[3px] border-transparent" />
                </div>
              </div>
              <div>
                <p className="font-display text-[26px] text-ink mt-0.8">Suruchi Shirole</p>
                <p className="font-mono text-[14px] text-faint mt-0.8">Computer Engineering Student · Pune</p>
                <p className="font-mono text-[15px] text-faint mt-0.8">Java Developer</p>
              </div>
            </div>
            <p className="text-xs text-[#8890A6] leading-relaxed border-t border-white/5 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              "Software should be legible before it's clever — a clean schema and a working CRUD flow beat a flashy demo that breaks on the second click."
            </p>
          </div>

          {/* Card 2: Contributions */}
          <div className="card-bento glass rounded-2xl p-6 lg:col-span-1 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Contributions</h2>
              <i data-lucide="box" className="w-4 h-4 text-cyan shrink-0"></i>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Hackathons, leadership, and collaborative problem-solving.</i></p>
             
            <div className="flex-1 flex flex-col justify-center mt-3">
              {/* Fixed invalid HTML and styling string */}
              <div className="text-[12px] text-[#CDD3E2] leading-relaxed">
                <ul className="list-disc pl-5 space-y-0.9 marker:text-cyan-600">
                  <li><b>Smart India Hackathon (SIH)</b> - National Level Participant</li>
                  <li><b>Ignition Hackverse</b> - National Level Participant</li>
                  <li><b>Question Master Team Lead</b> - @State Level Online Quiz</li>
                  <li><b>Technical Collaboration</b> - Contributed to team-based projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Internships */}
          <div className="card-bento glass rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Internships / Training</h2>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Hands-on experience.</i></p>
                </div>
              </div>
            </div>

            <div className="relative border-l border-gray-700 ml-3 space-y-3 pb-1 flex-1">
              <div className="relative pl-4">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-[#0A0E17] border-[1.5px] border-teal-400 rounded-full"></div>
                <h3 className="text-[13.5px] font-medium text-gray-200 leading-tight">Innovatus Technologies <span className="font-normal text-gray-400">– Java FullStack Intern</span></h3>
                <p className="text-[11px] text-gray-500 mt-0.5 font-mono">Java, Python, MySQL</p>
              </div>
              <div className="relative pl-4">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-[#0A0E17] border-[1.5px] border-teal-400 rounded-full"></div>
                <h3 className="text-[13.5px] font-medium text-gray-200 leading-tight">Innovatus Technologies <span className="font-normal text-gray-400">– Apprentice </span></h3>
                <p className="text-[11px] text-gray-500 mt-0.5 font-mono">OOP, Core Java</p>
              </div>
              <div className="relative pl-4">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-[#0A0E17] border-[1.5px] border-teal-400 rounded-full"></div>
                <h3 className="text-[13.5px] font-medium text-gray-200 leading-tight">Mentorship Program - Cognizant</h3>
                <p className="text-[11px] text-gray-500 mt-0.5 font-mono">@NorthSouth Foundation(NSF)</p>              
              </div>
            </div>
          </div>

          {/* Card 4: Chess Achievements */}
          <div className="card-bento glass rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Chess Achievements</h2>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Discipline, strategy & focus.</i></p>
              </div>
              {/* Added Crown icon */}
              <i data-lucide="crown" className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5"></i>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mt-2">
              <div className="text-sm text-[#CDD3E2] leading-relaxed">
                <ul className="list-disc pl-4 space-y-1.5 marker:text-yellow-600/70">
                  <li>Secured 2nd Rank at Inter-Zonal Chess Competitions x2</li>
                  <li>First Rank at College Level Chess Competitions x3</li>
                  <li>Improved strategic thinking, patience & decision-making skills...</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 5: Areas of Interest */}
          <div className="card-bento glass rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Areas of Interest</h2>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Technologies & domains I'm passionate about.</i></p>
              </div>
              {/* Added Sparkles icon */}
              <i data-lucide="sparkles" className="w-5 h-5 text-purple-400 shrink-0 mt-0.5"></i>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mt-3">
              <div className="text-sm text-[#CDD3E2] leading-relaxed">
                <ul className="list-square pl-5 space-y-1.5 marker:text-purple-500/70">
                  <li><b>Software Development</b></li>
                  <li><b>Artificial Intelligence & Machine Learning</b></li>
                  <li><b>CyberSecurity</b></li>
                  <li><b>Full Stack Development</b></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 6: Soft Skills */}
          <div className="card-bento glass rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Soft Skills</h2>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Skills that helped me work, learn & grow.</i></p>
              </div>
              {/* Added Users icon */}
              <i data-lucide="users" className="w-5 h-5 text-pink-400 shrink-0 mt-0.5"></i>
            </div>
            
            <div className="flex-1 flex flex-col justify-center mt-3">
              <div className="text-sm text-[#CDD3E2] leading-relaxed grid grid-cols-2 gap-x-2">
                <ul className="list-disc pl-5 space-y-1.5 marker:text-pink-500/70">
                  <li><b>Problem Solving</b></li>
                  <li><b>Team Work</b></li>
                  <li><b>Adaptability</b></li>
                </ul>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-pink-500/70">
                  <li><b>Time Management</b></li>
                  <li><b>Leadership</b></li>
                  <li><b>Communication</b></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 7: Career Objective */}
          <div className="card-bento glass rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="text-[16px] font-semibold text-gray-100 tracking-wide leading-tight">Career Objective</h2>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-tight"><i>Where I see myself in the future.</i></p>
              </div>
              {/* Added Target icon */}
              <i data-lucide="target" className="w-5 h-5 text-red-400 shrink-0 mt-0.5"></i>
            </div>
            <div className="flex-1 flex flex-col justify-center mt-3">
              <p className="text-[13px] text-[#CDD3E2] leading-relaxed italic border-l-2 border-red-500/30 pl-3">
                 "To work as a skilled Software Developer & AI/ML Engineer, where I can apply technical knowledge, build innovative solutions, and contribute to meaningful projects that create a positive impact."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}