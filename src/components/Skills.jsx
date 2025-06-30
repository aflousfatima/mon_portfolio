import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
  'Languages': [
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'SQL', logo: '/logos/sql.png' },
    { name: 'TypeScript', logo: '/logos/typescript.png' },
    { name: 'HTML', logo: '/logos/html.png' },
    { name: 'CSS', logo: '/logos/css.png' },
  ],
  'Web & Frameworks': [
    { name: 'Spring Boot', logo: '/logos/springboot.png' },
    { name: 'Flask', logo: '/logos/flask.png' },
    { name: 'Fast API', logo: '/logos/fastApi.png' },
    { name: 'Node.js', logo: '/logos/nodejs.png' },
    { name: 'React', logo: '/logos/reactjs.png' },
    { name: 'Angular', logo: '/logos/angular.png' },
    { name: 'Bootstrap', logo: '/logos/bootstrap.png' },
    { name: 'REST', logo: '/logos/restapi.png' },
    { name: 'GraphQL', logo: '/logos/graphql.png' },
    { name: 'WebSocket', logo: '/logos/websocket.png' },
  ],
  'Data & IA': [
    { name: 'MongoDB', logo: '/logos/mongodb.png' },
    { name: 'Redis', logo: '/logos/redis.png' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.png' },
    { name: 'MySQL', logo: '/logos/mysql.png' },
    { name: 'Kafka', logo: '/logos/kafka.png' },
    { name: 'RabbitMQ', logo: '/logos/rabbitmq.png' },
    { name: 'Hadoop', logo: '/logos/hadoop.png' },
    { name: 'Spark', logo: '/logos/spark.png' },
    { name: 'Hive', logo: '/logos/hive.png' },
    { name: 'Scikit-learn', logo: '/logos/sickitlearn.png' },
    { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
    { name: 'Keras', logo: '/logos/keras.png' },
    { name: 'Pandas', logo: '/logos/pandas.png' },
    { name: 'NumPy', logo: '/logos/numpy.png' },
    { name: 'MLFlow', logo: '/logos/mlflow.png' },
    { name: 'DVC', logo: '/logos/dvc.png' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'Proxmox', logo: '/logos/proxmox.png' },
    { name: 'Docker', logo: '/logos/docker.png' },
    { name: 'Docker-compose', logo: '/logos/dockercompose.png' },
    { name: 'Kubernetes', logo: '/logos/kubernetes.png' },
    { name: 'Terraform', logo: '/logos/terraform.png' },
    { name: 'Vault', logo: '/logos/vault.png' },
    { name: 'Ansible', logo: '/logos/ansible.png' },
    { name: 'GitHub Actions', logo: '/logos/githubactions.png' },
    { name: 'Jenkins', logo: '/logos/jenkins.png' },
    { name: 'Nexus', logo: '/logos/nexus.png' },
    { name: 'Trivy', logo: '/logos/trivy.png' },
    { name: 'Snyk', logo: '/logos/snyk.png' },
    { name: 'Cosign', logo: '/logos/cosign.png' },
    { name: 'OWASP ZAP', logo: '/logos/owaspzap.png' },
    { name: 'in-toto', logo: '/logos/intoto.png' },
    { name: 'DefectDojo', logo: '/logos/defectdojo.png' },
    { name: 'Prometheus', logo: '/logos/prometheus.png' },
    { name: 'Grafana', logo: '/logos/grafana.png' },
    { name: 'ELK Stack', logo: '/logos/elkstack.png' },
  ],
};


export default function Skills() {
  const categories = Object.keys(skillsData);
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">I’m continuously improving in these technologies — mastery is a journey, and I enjoy the process.</p>

      <div className="categories-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selected === cat ? 'active' : ''}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-logos-container" data-category={selected}>
        {skillsData[selected].map(({ name, logo }, index) => (
          <div
            className="skill-logo-card"
            key={name}
            title={name}
            style={{
              '--index': index,
              '--total': skillsData[selected].length,
            }}
          >
            <img src={logo} alt={name} className="skill-logo" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}