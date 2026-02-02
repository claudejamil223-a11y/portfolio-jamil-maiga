
import React, { useState } from 'react';
import { PORTFOLIO_OWNER } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-black mb-10 leading-none tracking-tighter">Let's <span className="gradient-text italic">Connect</span></h1>
          <div className="space-y-6 mb-12">
            <p className="text-xl text-slate-400 leading-relaxed">
              I am currently seeking an <span className="text-white font-bold italic underline decoration-indigo-500 text-2xl">Assistant Engineer Internship</span> starting in <span className="text-indigo-400 font-bold">May 2026</span>.
            </p>
            <p className="text-xl text-slate-400 leading-relaxed">
              In parallel, I am looking for a <span className="text-white font-bold italic underline decoration-purple-500 text-2xl">Gap Year Program</span> opportunity starting in <span className="text-purple-400 font-bold">September 2026</span>.
            </p>
            <p className="text-slate-500 font-medium">
              I am open to discussions regarding industrial performance, data strategy, and management consulting roles.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">Email Address</span>
                <p className="text-lg font-bold text-slate-200">{PORTFOLIO_OWNER.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-600/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-600">Current Locations</span>
                <p className="text-lg font-bold text-slate-200">{PORTFOLIO_OWNER.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="glass-morphism p-10 md:p-14 rounded-[3rem] space-y-6">
            <input 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all"
              placeholder="Your Full Name" required
            />
            <input 
              type="email"
              className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all"
              placeholder="Your Professional Email" required
            />
            <textarea 
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
              placeholder="Tell me about your internship or gap year program offer..." required
            />
            <button 
              type="submit" 
              className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-[1.02]"
            >
              {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Sent! ✨'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
