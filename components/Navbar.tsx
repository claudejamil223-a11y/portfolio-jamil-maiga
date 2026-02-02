import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] p-4 md:p-6 flex justify-center">
      <div className="glass-morphism rounded-3xl px-6 md:px-8 py-3 flex items-center justify-between w-full max-w-5xl shadow-2xl">
        <div 
          onClick={() => onNavigate('home')}
          className="text-xl font-black gradient-text tracking-tighter cursor-pointer hover:scale-105 transition-transform"
        >
          JC.
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all rounded-xl ${
                currentPage === link.id 
                  ? 'text-white bg-white/10 shadow-inner' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/98 z-[55] flex flex-col items-center justify-center space-y-6 md:hidden backdrop-blur-xl">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setIsMenuOpen(false); }}
              className={`text-3xl font-black uppercase tracking-tighter transition-colors ${
                currentPage === link.id ? 'gradient-accent' : 'text-slate-500'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="mt-12 w-12 h-12 flex items-center justify-center rounded-full border border-slate-800 text-slate-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;