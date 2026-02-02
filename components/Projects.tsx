
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Strategic <span className="gradient-text">Portfolio</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Solving complex industrial and economic challenges through data and engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden transition-all hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col h-full"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              {project.demoUrl && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-indigo-300 bg-indigo-400/10 px-3 py-1.5 rounded-full border border-indigo-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 whitespace-pre-line flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6 mt-auto">
                <a 
                  href={project.link}
                  className="inline-flex items-center text-xs font-black text-white group-hover:text-indigo-400 transition-all uppercase tracking-widest"
                >
                  Details
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-black text-indigo-400 hover:text-indigo-300 transition-all uppercase tracking-widest"
                  >
                    Live Demo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
