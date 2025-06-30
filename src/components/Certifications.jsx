import React from 'react';
import './Certifications.css';

// Données des certificats avec compétences courtes, liens, et images
const certificationsData = [
  {
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    skills: ['Design Thinking', 'User Focus', 'Collaboration'],
    certificateLink: 'https://www.credly.com/badges/cd1959f1-4ce8-4b27-963e-887ebc3dfb85',
    issuerLink: 'https://www.ibm.com',
    issuerLogo: '/issuer/ibm-logo.png',
    image: '/certif/cert-ibm.png',
  },
  {
    name: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Coursera',
    skills: ['Cloud Basics', 'OCI Setup', 'Infrastructure'],
    certificateLink: 'https://www.coursera.org/account/accomplishments/verify/T9HAYA5YBWT7',
    issuerLink: 'https://www.coursera.org',
    issuerLogo: '/issuer/oracle-logo.png',
    image: '/certif/cert-coursera.png',
  },
  {
    name: 'Scrum Foundation Professional Certification',
    issuer: 'CertiProf',
    skills: ['Scrum Basics', 'Agile Workflow', 'Teamwork'],
    certificateLink: 'https://www.credly.com/earner/earned/badge/4ea95284-d01b-421e-8f0c-d64a4682d3e2',
    issuerLink: 'https://www.certiprof.com',
    issuerLogo: '/issuer/certiprof-logo.png',
    image: '/certif/cert-certiprof.png',
    },

      {
        name: 'AWS Certified DevOps Engineer Professional',
        issuer: 'Udemy',
        skills: ['AWS DevOps', 'CI/CD', 'Cloud Automation'],
        certificateLink: 'https://www.udemy.com/certificate/UC-49b05d5d-fc1e-48e8-a980-8829c46a6d8b/',
        issuerLink: 'https://www.udemy.com',
        issuerLogo: '/issuer/udemy-logo.png',
        image: '/certif/cert-udemy.png',
      },
    
  {
    name: 'MLOps Foundations',
    issuer: 'DataCamp',
    skills: ['CI/CD Pipelines', 'Model Monitoring', 'Automation'],
    certificateLink: 'https://www.datacamp.com/statement-of-accomplishment/course/ce00a9cc9265254cacfb91f6f0fa55109e8d5f29?raw=1',
    issuerLink: 'https://www.datacamp.com',
    issuerLogo: '/issuer/datacamp-logo.png',

    image: '/certif/cert-datacamp1.png',
    },
    {
        name: 'Generative AI Concepts',
        issuer: 'DataCamp',
        skills: ['Model Training', 'Data Preparation', 'Ethics & Bias'],
        certificateLink: 'https://www.datacamp.com/statement-of-accomplishment/course/bad985f68dba34eea975cf8c4cf4bc37e1543f76?raw=1',
        issuerLink: 'https://www.datacamp.com',
        issuerLogo: '/issuer/datacamp-logo.png',
        image: '/certif/cert-datacamp2.png',
      },

  {
    name: 'DevSecOps',
    issuer: 'Cybrary',
    skills: ['Threat Modeling', 'SAST / DAST', 'Vulnerability Scan'],
    certificateLink: 'https://app.cybrary.it/profile/VoluminousKingfisher1491?tab=cert-completion&cert=CC-48768d2b-0a2e-4b1e-b981-fadb0ab937e8',
    issuerLink: 'https://www.cybrary.it',
    issuerLogo: '/issuer/cybrayry-logo.png',
    image: '/certif/cert-cybrary.png',
  },
];

export default function Certifications() {
  return (
    <section id="certifications"  className="certifications-section">
          <h2 className="certifications-title">My Certifications</h2>
          <p className="certification-description">I believe in learning continuously — whether it's through a paid course or a free opportunity</p>
      <div className="certifications-container">
        {certificationsData.map((cert, index) => (
          <div className="certification-card" key={index} style={{ '--index': index }}>
            <img src={cert.image} alt={cert.name} className="certification-image" />
            <div className="certification-content">
              <h3 className="certification-name">{cert.name}</h3>
              <div className="certification-skills">
                {cert.skills.join(' • ')}
              </div>
              <div className="certification-actions">
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-button"
                >
                  View Certification
                </a>
                <a
                  href={cert.issuerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-icon"
                >
                  <img
  src={cert.issuerLogo}
  alt={cert.issuer}
  className="issuer-logo"
/>

                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}