import React from 'react';
import { Music, ExternalLink, Calendar } from 'lucide-react';
import { portfolioData } from '../data';
import './Activities.css';

const Activities: React.FC = () => {
  const { activities } = portfolioData;

  return (
    <section className="section" id="activities">
      <div className="container">
        <h2 className="heading-lg text-gradient" style={{ textAlign: 'center' }}>Extracurricular Activities</h2>
        
        <div className="activities-intro animate-fade-in-up">
          <div className="activities-icon-wrap">
            <Music size={32} />
          </div>
          <p className="activities-desc">{activities.intro}</p>
        </div>

        <div className="activities-list">
          {activities.items.map((item, index) => (
            <div key={index} className="glass-card activity-card animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="activity-content">
                <h3>{item.title}</h3>
                
                {item.period && (
                  <div className="activity-meta">
                    <Calendar size={14} /> <span>{item.period}</span>
                  </div>
                )}
                
                {item.description && (
                  <p className="activity-details">{item.description}</p>
                )}
                
                {item.role && (
                  <div className="activity-role">
                    <strong>Responsibility:</strong> {item.role}
                  </div>
                )}
                
                {item.url && (
                  <a href={item.url} className="activity-link" target="_blank" rel="noreferrer">
                    Event Details <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
