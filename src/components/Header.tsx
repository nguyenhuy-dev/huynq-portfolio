import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav-container container">
        <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
          Huy<span className="text-gradient">.Dev</span>
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollTo('skills')}>Skills</li>
          <li onClick={() => scrollTo('projects')}>Projects</li>
          <li onClick={() => scrollTo('background')}>Background</li>
          <li onClick={() => scrollTo('activities')}>Activities</li>
          <li onClick={() => scrollTo('contact')} className="nav-cta">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
