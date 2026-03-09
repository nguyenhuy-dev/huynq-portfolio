import React from 'react';
import { Code2, Server, Database, Wrench, Cloud, Heart } from 'lucide-react';
import { portfolioData } from '../data';
import './Skills.css';

const skillIconMap = {
  languages: <Code2 className="skill-icon" />,
  frameworks: <Server className="skill-icon" />,
  databases: <Database className="skill-icon" />,
  tools: <Wrench className="skill-icon" />,
  deployment: <Cloud className="skill-icon" />,
  softSkills: <Heart className="skill-icon" />
};

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const parseSkillsList = (skillStr: string) => {
    return skillStr.split(',').map(s => s.trim());
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="heading-lg text-gradient" style={{ textAlign: 'center' }}>Technical & Soft Skills</h2>
        
        <div className="skills-grid">
          {/* Technical Skills Category */}
          <div className="glass-card animate-fade-in-up">
            <div className="skill-header">
              {skillIconMap.languages}
              <h3>Languages</h3>
            </div>
            <div className="skills-list">
              {parseSkillsList(skills.languages).map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="skill-header">
              {skillIconMap.frameworks}
              <h3>Frameworks</h3>
            </div>
            <div className="skills-list">
              {parseSkillsList(skills.frameworks).map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="skill-header">
              {skillIconMap.databases}
              <h3>Databases</h3>
            </div>
            <div className="skills-list">
              {parseSkillsList(skills.databases).map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="skill-header">
              {skillIconMap.deployment}
              <h3>Deployment</h3>
            </div>
            <div className="skills-list">
              {parseSkillsList(skills.deployment).map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="skill-header">
              {skillIconMap.tools}
              <h3>Tools</h3>
            </div>
            <div className="skills-list">
              {parseSkillsList(skills.tools).map((s, i) => (
                <span key={i} className="pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="skill-header">
              {skillIconMap.softSkills}
              <h3>Soft Skills</h3>
            </div>
            <div className="skills-list">
              {skills.softSkills.map((s, i) => (
                <span key={i} className="pill highlight-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
