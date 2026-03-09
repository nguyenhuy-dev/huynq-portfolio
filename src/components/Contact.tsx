import React from 'react';
import { Mail, Github, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data';
import './Contact.css';

const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="footer section" id="contact">
      <div className="container">
        <div className="footer-content glass-card border-glow">
          <div className="footer-info">
            <h2 className="heading-lg">Let's Connect</h2>
            <p className="footer-desc">
              Currently seeking Full-Stack development opportunities. My inbox is always open.
            </p>
          </div>
          
          <div className="footer-links">
            <a href={`mailto:${personalInfo.email}`} className="footer-link-item">
              <Mail className="footer-icon" />
              <div>
                <strong>Email</strong>
                <span>{personalInfo.email}</span>
              </div>
            </a>

            <div className="footer-link-item">
              <Phone className="footer-icon" />
              <div>
                <strong>Phone</strong>
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            <a href={`https://${personalInfo.github}`} className="footer-link-item" target="_blank" rel="noreferrer">
              <Github className="footer-icon" />
              <div>
                <strong>GitHub</strong>
                <span>{personalInfo.github}</span>
              </div>
            </a>

            <div className="footer-link-item">
              <MapPin className="footer-icon" />
              <div>
                <strong>Location</strong>
                <span>{personalInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-credits">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
