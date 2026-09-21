import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Removed GrSend to prevent app crash

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const [btnLabel, setBtnLabel] = useState(null);

  // THIS WAS MISSING: Loads Lucide icons the second the page opens
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const handleCopy = async (val, id) => {
    try { await navigator.clipboard.writeText(val); } catch(e) {}
    setCopied(id);
    if(window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      setCopied(null);
      if(window.lucide) window.lucide.createIcons();
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target['f-name'].value.trim();
    const email = e.target['f-email'].value.trim();
    const msg = e.target['f-message'].value.trim();

    setBtnLabel(<span className="font-mono">Sending...</span>);
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
      window.location.href = `mailto:suruchishirole@gmail.com?subject=${subject}&body=${body}`;
      setBtnLabel(<><i data-lucide="check-circle" className="w-4 h-4"></i> Opening mail client</>);
      if(window.lucide) setTimeout(()=>window.lucide.createIcons(), 10);
      
      setTimeout(() => {
        setBtnLabel(null);
        if(window.lucide) setTimeout(()=>window.lucide.createIcons(), 10);
      }, 2200);
    }, 700);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="reveal glass-strong glow-ring rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[0.7rem] text-cyan mb-3">// LET'S CONNECT</p>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">Open to engineering roles &amp; collaborations.</h2>
            <p className="text-[#B7BDD0] text-sm leading-relaxed mb-8 max-w-sm">
              Reach out directly, or send a message through the terminal — I'll get back to you by email.
            </p>

            <div className="space-y-3">
              <button onClick={() => handleCopy('suruchishirole@gmail.com', 'email')} className="copy-row w-full flex items-center justify-between glass rounded-xl px-4 py-3.5 hover:border-white/20 transition-colors">
                <span className="flex items-center gap-3 text-sm text-[#CDD3E2]"><i data-lucide="mail" className="w-4 h-4 text-cyan"></i>suruchishirole@gmail.com</span>
                <i data-lucide={copied === 'email' ? 'check' : 'copy'} className={`w-3.5 h-3.5 ${copied === 'email' ? 'text-emerald' : 'text-faint'}`}></i>
              </button>
              
              <button onClick={() => handleCopy('9657018509', 'phone')} className="copy-row w-full flex items-center justify-between glass rounded-xl px-4 py-3.5 hover:border-white/20 transition-colors">
                <span className="flex items-center gap-3 text-sm text-[#CDD3E2]"><i data-lucide="phone" className="w-4 h-4 text-emerald"></i>+91 96570 18509</span>
                <i data-lucide={copied === 'phone' ? 'check' : 'copy'} className={`w-3.5 h-3.5 ${copied === 'phone' ? 'text-emerald' : 'text-faint'}`}></i>
              </button>
              
              {/* FIXED: Using FaLinkedin properly without wrapping it in a Lucide tag */}
              <a href="https://www.linkedin.com/in/Suruchi-Shirole" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between glass rounded-xl px-4 py-3.5 hover:border-white/20 transition-colors">
                <span className="flex items-center gap-3 text-sm text-[#CDD3E2]">
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2]" /> {/* Added official LinkedIn Blue */}
                  in/Suruchi Shirole
                </span>
                <i data-lucide="arrow-up-right" className="w-4 h-4 text-cyan"></i>
              </a>

              {/* FIXED: Using FaGithub properly without wrapping it in a Lucide tag */}
              <a href="https://github.com/suruchishirole" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between glass rounded-xl px-4 py-3.5 hover:border-white/20 transition-colors mt-3">
                <span className="flex items-center gap-3 text-sm text-[#CDD3E2]">
                  <FaGithub className="w-4 h-4 text-gray-200" />
                  github.com/suruchishirole
                </span>
                <i data-lucide="arrow-up-right" className="w-4 h-4 text-cyan"></i>
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 md:p-6">
            <div className="flex items-center gap-1.5 pb-3 mb-4 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FEBC2E]"></span>
              <span className="w-2 h-2 rounded-full bg-[#28C840]"></span>
              <span className="ml-2 font-mono text-[0.68rem] text-faint">transmit.sh</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="font-mono text-[0.68rem] text-faint block mb-1.5">--Name</label>
                <input required type="text" id="f-name" className="field" placeholder="your name" />
              </div>
              <div>
                <label className="font-mono text-[0.68rem] text-faint block mb-1.5">--Email</label>
                <input required type="email" id="f-email" className="field" placeholder="you@example.com" />
              </div>
              <div>
                <label className="font-mono text-[0.68rem] text-faint block mb-1.5">--Message</label>
                <textarea required id="f-message" rows="4" className="field resize-none" placeholder="what's on your mind..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center magnetic">
                <span className="flex items-center gap-2">
                  {btnLabel ? btnLabel : <><i data-lucide="send" className="w-4 h-4"></i>Transmit Message</>}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}