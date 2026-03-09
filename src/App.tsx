import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Background from './components/Background';
import Activities from './components/Activities';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Dynamic Background Glows */}
      <div className="glow-bg" style={{ top: '-10%', left: '-10%' }} />
      <div className="glow-bg" style={{ top: '40%', right: '-10%', animationDelay: '2s' }} />
      <div className="glow-bg" style={{ bottom: '-10%', left: '20%', animationDelay: '4s' }} />

      <Header />
      
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <Skills />
        <Projects />
        <Background />
        <Activities />
      </main>

      <Contact />
    </div>
  );
}

export default App;
