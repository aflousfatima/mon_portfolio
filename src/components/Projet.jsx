import React, { useState, useEffect } from 'react'; // Ajout de useEffect pour initialiser les index
import './Projet.css';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Agile Project Management Platform',
    category: 'developpement',
    description:
      'A modern platform for managing agile IT teams with real-time collaboration, AI features, GitHub integration, and smart sprint planning.',
    images: ['/project1.1.png', '/project1.2.png', '/project1.3.png' , '/project1.4.png' , '/project1.5.png' , '/project1.6.png' , '/project1.7.png' , '/project1.8.png' , '/project1.9.png' , '/project1.10.png', '/project1.11.png', '/project1.12.png' , '/project1.13.png' , '/project1.14.png', '/project1.15.png', '/project1.16.png', '/project1.17.png', '/project1.18.png', '/project1.19.png', '/project1.20.png', '/project1.21.png', '/project1.22.png'], // Multiple images
    github: 'https://github.com/aflousfatima/gestion_projet',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-commerce Web Application',
    category: 'developpement',
    description:
      'A full-featured e-commerce platform with authentication, shopping cart, order tracking, wishlist, and promotions management.',
    images: ['/project2.1.png', '/project2.2.png','/project2.3.png', '/project2.4.png','/project2.5.png', '/project2.6.png','/project2.7.png', '/project2.8.png','/project2.9.png', '/project2.10.png','/project2.11.png', '/project2.12.png'], // Multiple images
    github: 'https://github.com/aflousfatima/e-commerce',
    demo: '',
  },
  {
    id: 3,
    title: 'Restaurant Management Web App',
    category: 'developpement',
    description:
      'An advanced app for managing users, menus, orders, reservations, and secure online payments in real time.',
    tech: ['Spring Boot', 'Angular', 'Docker', 'Kubernetes', 'MySQL', 'PostgreSQL'],
    images: ['/project3.1.png', '/project3.2.png', '/project3.3.png','/project3.4.png', '/project3.5.png', '/project3.6.png','/project3.7.png', '/project3.8.png', '/project3.9.png','/project3.10.png', '/project3.11.png', '/project3.12.png','/project3.13.png', '/project3.14.png'], // Multiple images
    github: 'https://github.com/fatimaaflous/Gestion_De_Restaurant',
    demo: '#',
  },
  {
    id: 4,
    title: 'University Research Management System',
    category: 'developpement',
    description:
      'A platform for managing labs, teams, professors, and PhD students with features like thesis assignment and project proposal tracking.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    images: ['/project4.1.png', '/project4.2.png' , '/project4.3.png', '/project4.4.png' , '/project4.5.png', '/project4.6.png'], // Multiple images
    github: 'https://github.com/aflousfatima/university-management',
    demo: '',
  },
  {
    id: 5,
    title: 'Enterprise Network Infrastructure',
    category: 'reseau',
    description:
      'Designed and implemented a full 3-tier network architecture with VLANs, OSPF, DHCP, HSRP, and advanced security measures for high availability and performance.',
    images: ['/network_project.png', '/network_project2.png'], // Multiple images
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Brute Force Attack Simulation & Mitigation',
    category: 'reseau',
    description:
      'Simulated brute-force attacks using DVWA and OpenBullet2, with real-time detection via Wazuh and automated blocking using Fail2Ban.',
    tech: ['DVWA', 'Burp Suite', 'OpenBullet2', 'Wazuh', 'Fail2Ban'],
    images: ['/security_project.png'], // Multiple images
    github: '#',
    demo: '#',
  },
  {
    id: 7,
    title: 'CI/CD Pipeline for Microservices',
    category: 'devops',
    description:
      'End-to-end CI/CD pipeline with Jenkins, SonarQube, Docker, and Ansible, enabling quality checks, containerization, and automated deployment.',
    tech: ['Jenkins', 'SonarQube', 'Docker', 'Ansible', 'Slack'],
    images: ['/devops_pipeline1.png'], // Multiple images
    github: 'https://github.com/fatimaaflous/Gestion_De_Laboratoire',
    demo: '#',
  },
  {
    id: 8,
    title: 'Microservices Restaurant Architecture',
    category: 'devops',
    description:
      'A full-stack restaurant system based on microservices with REST, GraphQL, RabbitMQ, and multi-tech stack. Real-time notification, online payment, and CI-friendly architecture.',
    tech: ['Spring Boot', 'Flask', 'ASP.NET', 'RabbitMQ', 'MongoDB', 'MySQL', 'PostgreSQL', 'Stripe'],
    images: ['/devops_pipeline2.png'], // Multiple images
    github: 'https://github.com/fatimaaflous/Gestion_De_Restaurant',
    demo: '#',
  },
  {
    id: 9,
    title: 'Cloud Deployment Workflow for Java App',
    category: 'devops',
    description:
      'A GitHub Actions workflow for containerizing and deploying Java apps to AWS using ECR and ECS, with environment detection and secure credentials handling.',
    tech: ['Docker', 'AWS', 'ECR', 'GitHub Actions'],
    images: ['/cloud1.png'], // Multiple images
    github: 'https://github.com/aflousfatima/deploy_on_aws',
    demo: '#',
  },
  {
    id: 10,
    title: 'Secure DevSecOps CI/CD Pipeline',
    category: 'devops',
    description:
      'A complete DevSecOps pipeline including GitHub Actions, Snyk, Trivy, Cosign, in-toto, SonarCloud, Nexus, and OWASP ZAP integrated with Kubernetes and monitored by Grafana & Prometheus.',
    tech: ['GitHub Actions', 'Docker', 'Snyk', 'Trivy', 'Cosign', 'in-toto', 'SonarQube', 'Nexus', 'Kubernetes'],
    images: ['/pipeline2.png'], // Multiple images
    github: 'https://github.com/aflousfatima/gestion_projet/blob/main/.github/workflows/ci.yml',
    demo: '#',
  },
];

const Projet = () => {
  const [filter, setFilter] = useState('developpement');
  const [currentImages, setCurrentImages] = useState({});

  // Initialiser les index des images au montage
  useEffect(() => {
    const initialIndexes = {};
    projectsData.forEach((project) => {
      initialIndexes[project.id] = 0;
    });
    setCurrentImages(initialIndexes);
  }, []);

  const filteredProjects = projectsData.filter((p) => p.category === filter || filter === 'developpement' && p.category === 'developpement');

  const handlePrev = (id) => {
    setCurrentImages((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : (projectsData.find(p => p.id === id)?.images?.length - 1 || 0),
    }));
  };

  const handleNext = (id) => {
    setCurrentImages((prev) => ({
      ...prev,
      [id]: prev[id] < (projectsData.find(p => p.id === id)?.images?.length - 1 || 0) ? prev[id] + 1 : 0,
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">My Recent Projects</div>
      <p className="projet-description">
        These projects reflect how I apply what I learn — from full-stack development to cloud, DevOps, and security. I'm still learning, building, and exploring every day.
      </p>
      <div className="projects-filter">
        <div className="filter-buttons">
          <button
            className={filter === 'developpement' ? 'active' : ''}
            onClick={() => setFilter('developpement')}
          >
            Development
          </button>
          <button
            className={filter === 'devops' ? 'active' : ''}
            onClick={() => setFilter('devops')}
          >
            DevOps / Cloud
          </button>
          <button
            className={filter === 'reseau' ? 'active' : ''}
            onClick={() => setFilter('reseau')}
          >
            Networking / Security
          </button>
        </div>
      </div>

      <div className="projects-grid two-per-row">
        {filteredProjects.map((project) => {
          const currentIndex = currentImages[project.id] || 0;
          const totalImages = project.images?.length || 1;

          return (
            <div className="project-card two-column" key={project.id}>
              <div className="project-carousel">
                <button
                  className="carousel-prev"
                  onClick={() => handlePrev(project.id)}
                  disabled={totalImages <= 1}
                >
                  <FaArrowLeft />
                </button>
                <div className="carousel-images">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <button
                  className="carousel-next"
                  onClick={() => handleNext(project.id)}
                  disabled={totalImages <= 1}
                >
                  <FaArrowRight />
                </button>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projet;