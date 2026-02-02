
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Experience } from '../types';

const Experiences: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Professional & <span className="gradient-text">Leadership</span></h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">Combining industrial expertise with high-stakes associative management.</p>
      </div>

      <div className="space-y-20">
        {/* Professional Section */}
        <div>
          <h3 className="text-sm font-black text-indigo-500 mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
            Professional Career <span className="h-px flex-1 bg-indigo-500/20"></span>
          </h3>
          <div className="grid gap-8">
            {EXPERIENCES.filter(exp => exp.type === 'Professional').map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} color="indigo" />
            ))}
          </div>
        </div>

        {/* Association Section */}
        <div>
          <h3 className="text-sm font-black text-purple-500 mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
            Leadership & Associations <span className="h-px flex-1 bg-purple-500/20"></span>
          </h3>
          <div className="grid gap-8">
            {EXPERIENCES.filter(exp => exp.type === 'Association').map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} color="purple" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ exp, color }: { exp: Experience, color: 'indigo' | 'purple' }) => {
  const borderColor = color === 'indigo' ? 'group-hover:border-indigo-500/50' : 'group-hover:border-purple-500/50';
  const textColor = color === 'indigo' ? 'text-indigo-400' : 'text-purple-400';

  return (
    <div className={`glass-morphism p-10 rounded-[2.5rem] group hover:bg-white/5 transition-all duration-500 border-l-4 border-l-transparent ${borderColor}`}>
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
        <div className="flex gap-6 items-center">
          {exp.logoUrl && (
            <div className="w-16 h-16 rounded-2xl bg-white p-2 shrink-0 shadow-lg overflow-hidden flex items-center justify-center">
              <img src={exp.logoUrl} alt={exp.company} className="max-w-full max-h-full object-contain" />
            </div>
          )}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:gradient-text transition-all leading-tight">{exp.role}</h4>
            <p className="text-xl text-slate-300 font-medium mt-1">{exp.company}</p>
          </div>
        </div>
        <div className="text-left md:text-right shrink-0">
          <p className={`font-black text-lg ${textColor}`}>{exp.period}</p>
          <p className="text-slate-500 text-sm font-medium">{exp.location}</p>
        </div>
      </div>
      <ul className="space-y-4">
        {exp.description.map((bullet: string, idx: number) => (
          <li key={idx} className="flex gap-4 text-slate-400 leading-relaxed text-lg">
            <span className={`${textColor} mt-1 text-xl`}>▹</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;