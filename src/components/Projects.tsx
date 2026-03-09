import React from 'react';
import { ExternalLink, Users, Calendar } from 'lucide-react';
import { portfolioData } from '../data';
import './Projects.css';

const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="heading-lg text-gradient" style={{ textAlign: 'center' }}>Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                {project.teamSize && (
                  <div className="meta-item">
                    <Users size={16} />
                    <span>Team: {project.teamSize}</span>
                  </div>
                )}
              </div>

              <p className="project-desc">{project.brief}</p>
              
              {project.role && (
                <div className="project-role">
                  <strong>Role:</strong> {project.role}
                </div>
              )}

              <div className="project-tech">
                <strong>Tech Stack:</strong>
                <div className="skills-list" style={{ marginTop: '0.5rem' }}>
                  {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="pill">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              <a href={project.url} className="project-link" target="_blank" rel="noreferrer">
                View Repository <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
