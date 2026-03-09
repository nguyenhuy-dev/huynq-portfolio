import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';
import './Background.css';

const Background: React.FC = () => {
  const { education, certificates, honors } = portfolioData;

  return (
    <section className="section" id="background">
      <div className="container">
        <h2 className="heading-lg text-gradient" style={{ textAlign: 'center' }}>Background & Achievements</h2>
        
        <div className="background-grid">
          {/* Education Section */}
          <div className="bg-column animate-fade-in-up">
            <h3 className="bg-title">
              <GraduationCap className="bg-icon" /> Education
            </h3>
            <div className="glass-card timeline-card">
              <h4>{education.university}</h4>
              <span className="timeline-date">{education.period}</span>
              <p><strong>Major:</strong> {education.major}</p>
              <p><strong>Semester:</strong> {education.semester}</p>
              <p><strong>GPA:</strong> {education.gpa}</p>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="bg-column animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="bg-title">
              <BookOpen className="bg-icon" /> Certificates
            </h3>
            <div className="timeline-container">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card timeline-card">
                  <h4>{cert.name}</h4>
                  <a href={cert.url} className="verify-link" target="_blank" rel="noreferrer">
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Honors Section */}
          <div className="bg-column animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="bg-title">
              <Award className="bg-icon" /> Honors
            </h3>
            <div className="timeline-container">
              {honors.map((honor, index) => (
                <div key={index} className="glass-card timeline-card">
                  <h4>{honor.title}</h4>
                  {honor.url && (
                    <a href={honor.url} className="verify-link" target="_blank" rel="noreferrer">
                      View Details <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
