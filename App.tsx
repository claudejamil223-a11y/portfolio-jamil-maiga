
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';
import Experiences from './components/Experiences.tsx';
import Certifications from './components/Certifications.tsx';
import Education from './components/Education.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Hero onNavigate={setCurrentPage} />;
      case 'education': return <Education />;
      case 'experience': return <Experiences />;
      case 'projects': return <Projects />;
      case 'certifications': return <Certifications />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-indigo-500/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div key={currentPage} className="page-enter">
          {renderPage()}
        </div>
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

export default App;