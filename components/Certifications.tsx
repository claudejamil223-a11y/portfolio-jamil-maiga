
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Verified <span className="gradient-text">Credentials</span></h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">Official certifications validating my expertise in Data Analytics, Business Intelligence, and Project Management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert) => (
          <div 
            key={cert.id} 
            className="glass-morphism p-8 rounded-[2.5rem] flex flex-col sm:flex-row gap-8 hover:bg-white/5 transition-all group border-transparent hover:border-indigo-500/20 shadow-xl"
          >
            <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center p-4 shrink-0 shadow-inner overflow-hidden">
              {cert.imageUrl ? (
                <img 
                  src={cert.imageUrl} 
                  alt={cert.issuer} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              ) : (
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-tight">
                  {cert.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-300">{cert.issuer}</p>
                  <p className="text-xs text-slate-500">Issued: {cert.date}</p>
                  <p className="text-[10px] font-mono text-indigo-400/70 bg-indigo-400/5 inline-block px-2 py-0.5 rounded border border-indigo-400/10">
                    ID: {cert.id}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all active:scale-95"
                >
                  Verify Credential
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
