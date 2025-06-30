import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
      Every journey starts somewhere — this experience was my first step into real-world DevOps, where I applied what I had learned and gained new insights through practice.
      </p>

      <div className="experience-card">
        <div className="experience-header">
                  <img src="vnb-it.PNG" alt="Me" className="experience-icon" />
          <div>
            <h3>DevOps Engineering Intern</h3>
            <p className="company-name">VNB-IT</p>
          </div>
        </div>

        <div className="experience-details">
          <ul>
            <li>Implemented secure CI/CD workflows using GitHub Actions and DevSecOps, reducing errors and speeding up delivery.</li>
            <li>Automated the configuration of a secure Linux server, enabling reliable hosting for a web application.</li>
            <li>Provisioned AWS infrastructure with Terraform & HCP, accelerating deployment by 30% and securing secret management.</li>
          </ul>

          <div className="experience-meta">
            <span><FaCalendarAlt /> Jan 27, 2025 – Apr 27, 2025</span>
            <span><FaMapMarkerAlt /> Pontoise, Île-de-France, France (Remote)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
