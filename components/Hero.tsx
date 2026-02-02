
import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleDownloadCV = () => {
    window.open(PORTFOLIO_OWNER.cvLink, '_blank');
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
        {/* Profile Image Wrap */}
        <div className="mb-10 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 overflow-hidden bg-slate-900 shadow-2xl">
            <img 
              src={PORTFOLIO_OWNER.profileImage} 
              alt={PORTFOLIO_OWNER.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://ui-avatars.com/api/?name=Jamil+Claude+Maiga&background=6366f1&color=fff&size=200";
              }}
            />
          </div>
        </div>

        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            Internship (May '26) • Gap Year (Sept '26)
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-tight text-white">
          Engineer-Manager <br />
          <span className="gradient-accent italic text-4xl md:text-6xl lg:text-7xl">bridging tech & strategy.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Dual competence at <span className="text-white">Centrale Casablanca & ESSEC</span>. 
          Transforming complex industrial flows into data-driven strategic growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={handleDownloadCV}
            className="group px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-3 shadow-xl shadow-white/5"
          >
            Download CV
            <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 glass-morphism text-white font-bold rounded-2xl transition-all hover:bg-white/10 w-full sm:w-auto border border-white/10"
          >
            Explore My Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
