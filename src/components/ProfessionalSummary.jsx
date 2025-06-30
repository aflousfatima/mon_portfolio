import React from 'react';
import { FiCode, FiCpu, FiCloud, FiMonitor } from 'react-icons/fi';
import './ProfessionalSummary.css';

const steps = [
    {
      icon: <FiCode />,
      title: 'Code Foundation',
      description:
        "It all started with writing clean and scalable code using Node.js, Spring Boot, FastAPI, and React — the backbone of every smart system I build.",
    },
    {
      icon: <FiCpu />,
      title: 'CI/CD Automation',
      description:
        "To move faster and safer, I mastered CI/CD pipelines with GitHub Actions, Docker, and Kubernetes — turning code into reliable deployments.",
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Infrastructure',
      description:
        "Then I architected secure and scalable infrastructures on AWS using Terraform and DevSecOps principles — bringing resilience to every solution.",
    },
    {
      icon: <FiMonitor />,
      title: 'Monitoring & AI Enhancements',
      description:
        "To ensure performance and foresight, I enabled full observability with Prometheus, Grafana, and ELK — while integrating AI to boost automation and insight.",
    },
  ];
  
  const ProfessionalSummary = () => {
    return (
      <section id="about" className="pipeline-horizontal-section">
        <div className="pipeline-horizontal-header">
          From Code to Cloud 
        </div>

        <div className="brief_subtitle">
       Always curious, always coding — building smart solutions while learning something new every day.
  </div>
        <div className="pipeline-horizontal-line" />
  
        <div className="pipeline-horizontal-steps">
          {steps.map(({ icon, title, description }, index) => (
            <div className="pipeline-step" key={index}>
              <div className="pipeline-icon">{icon}</div>
              <div className="pipeline-title">{title}</div>
              <div className="pipeline-description">{description}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default ProfessionalSummary;
