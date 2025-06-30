import React from 'react';
import './Articles.css';

// Exemple de données pour les articles (remplacez par vos vrais titres, descriptions, images, et liens Medium)
const articlesData = [
  {
    title: 'Automating a Business Scenario with Selenium, Cucumber, and Gherkin in a Spring Boot Application',
    description: 'Learn how to automate complex business scenarios using Selenium, Cucumber, and Gherkin in a Spring Boot app for robust, efficient testing.',
    image: '/articles/article3.png',
    link: 'https://medium.com/@aflousfatima/automating-a-business-scenario-with-selenium-cucumber-and-gherkin-in-a-spring-boot-application-6d1abcdc5a49',
  },
  {
    title: 'Automate Your Life with n8n: 2 Smart No-Code Workflows You Can Build in Minutes',
    description: 'Save time with n8n’s no-code automation. Discover two smart workflows to streamline repetitive tasks like emails and content summarization.',
    image: '/articles/article2.png',
    link: 'https://medium.com/@aflousfatima/automate-your-life-with-n8n-2-smart-no-code-workflows-you-can-build-in-minutes-d0cab11a0c7b',
  },
  {
    title: 'Shift-Left Security in GitHub Actions: Leveraging Trivy, Snyk, and Cosign for a Secure Software Supply Chain',
    description: 'Boost DevSecOps with Trivy, Snyk, and Cosign to secure your GitHub Actions pipeline through vulnerability scanning and container signing.',
    image: '/articles/article1.png',
    link: 'https://medium.com/@aflousfatima/securing-a-github-actions-pipeline-with-trivy-snyk-and-cosign-ff8dc2710e52',
  },
];

export default function Articles() {
  return (
    <section className="articles-section">
          <h2 className="articles-title">My Articles</h2>
          <p className="article-title-description"> Writing helps me learn better. These blog posts are my way of sharing what I build, break, and fix. I’ve only just started, but more is coming — stay tuned!
          </p>
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-button">
                Read Article
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}