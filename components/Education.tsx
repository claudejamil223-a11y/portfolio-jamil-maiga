
import React from 'react';
import { EDUCATION } from '../constants.tsx';

const Education: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">Academic <span className="gradient-text">Excellence</span></h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">Pursuing a dual competence in systems engineering and strategic management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="glass-morphism p-10 rounded-[3rem] border-t-8 border-t-indigo-600 hover:bg-white/5 transition-all group">
            <span className="text-indigo-400 font-bold text-sm tracking-[0.3em] uppercase">{edu.period}</span>
            <h2 className="text-4xl font-black mt-4 text-white group-hover:text-indigo-400 transition-colors">{edu.school}</h2>
            <p className="text-xl text-indigo-300 font-semibold mb-6 italic">{edu.degree}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{edu.details}</p>
            
            <div className="flex flex-wrap gap-2">
              {edu.courses.map(course => (
                <span key={course} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-800 text-slate-400">
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
