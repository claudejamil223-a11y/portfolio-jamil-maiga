
import React, { useState } from 'react';
import { PORTFOLIO_OWNER, PROJECTS } from '../constants';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const generateReadme = () => {
    const readme = `# ${PORTFOLIO_OWNER.name} - Portfolio\n\n${PORTFOLIO_OWNER.title}\n\n## Bio\n${PORTFOLIO_OWNER.bio}\n\n## Projects\n${PROJECTS.map(p => `- **${p.title}**: ${p.description.split('\n')[0]}`).join('\n')}\n\n## Contact\n- Email: ${PORTFOLIO_OWNER.email}\n- LinkedIn: ${PORTFOLIO_OWNER.linkedin}\n- GitHub: ${PORTFOLIO_OWNER.github}`;
    
    navigator.clipboard.writeText(readme);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-slate-900 bg-slate-950/80 print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-bold gradient-text mb-2">JM.</div>
          <p className="text-slate-500 text-sm italic">Data-driven engineering for industrial excellence.</p>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-8">
            <a href={PORTFOLIO_OWNER.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
            <a href={PORTFOLIO_OWNER.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
          <button 
            onClick={generateReadme}
            className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-indigo-400 transition-colors border border-slate-800 rounded-full px-3 py-1"
          >
            {copied ? 'README Copied! ✨' : 'Copy GitHub README.md'}
          </button>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
