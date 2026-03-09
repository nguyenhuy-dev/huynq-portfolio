import React from 'react';
import { Github, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data';
import './Hero.css';

const Hero: React.FC = () => {
  const { personalInfo, objectives } = portfolioData;

  return (
    <section className="hero-section section" id="home">
      <div className="container hero-grid">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badges">
            <span className="pill">
              <MapPin size={14} className="icon-gap" /> {personalInfo.address}
            </span>
          </div>
          
          <h1 className="heading-xl">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          
          <div className="hero-objectives">
            <p className="hero-objective-text">
              <strong className="text-primary">Short Term:</strong> {objectives.shortTerm}
            </p>
            <p className="hero-objective-text">
              <strong className="text-primary">Long Term:</strong> {objectives.longTerm}
            </p>
          </div>

          <div className="hero-socials">
            <a href={`mailto:${personalInfo.email}`} className="social-link glass-card" title="Email" target="_blank" rel="noreferrer">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`https://${personalInfo.github}`} className="social-link glass-card" title="GitHub" target="_blank" rel="noreferrer">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <div className="social-link glass-card" title="Phone">
              <Phone size={20} />
              <span>{personalInfo.phone}</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="image-border">
            <img 
              src={personalInfo.image} 
              alt={personalInfo.name}
              className="profile-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
