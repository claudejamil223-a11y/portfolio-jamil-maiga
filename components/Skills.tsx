
import React, { useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Design' | 'Other'>('All');
  
  const filteredSkills = filter === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  const categories = ['All', 'Backend', 'Other'];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic tracking-tight">Technical <span className="gradient-text font-black uppercase">Arsenal</span></h2>
          <p className="text-slate-400 max-w-md">Mastering data-driven tools and management strategies to optimize industrial performance.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                filter === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="relative group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{skill.name}</span>
              <span className="text-xs text-indigo-400 font-black">{skill.level}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
