
import './Contact.css';

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/fatima-aflous-a8583b284/',
  github: 'https://github.com/fatimaaflous',
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        Have a project, a question, or just want to say hi? I'd love to hear from you. Let's connect!
      </p>
      <div className="contact-container">
        <div className="contact-form-container">
        <form
  action="https://formspree.io/f/xpwrbzny" // ← ce lien est un exemple ! (tu dois en générer un)
  method="POST"
  className="contact-form"
>
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Your Message" required />
  </div>

  <button type="submit" className="contact-button">Send Message</button>
</form>

        </div>

        <div className="contact-social-container">
  <div className="social-cards">
    <div className="contact-card">
      <img src="/icons/gmail.png" alt="Email" className="card-icon" />
      <div className="card-info">
        <p className="card-label">Email</p>
        <p className="card-value">aflousfatima@gmail.com</p>
      </div>
    </div>

    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card clickable">
      <img src="/icons/linkedin.png" alt="LinkedIn" className="card-icon-linkedin"  />
      <div className="card-info">
        <p className="card-label">LinkedIn</p>
        <p className="card-value">@fatima-aflous</p>
      </div>
    </a>

    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="contact-card clickable">
      <img src="/icons/github.png" alt="GitHub" className="card-icon-github"  width="10" height="38"/>
      <div className="card-info">
        <p className="card-label">GitHub</p>
        <p className="card-value">@fatimaaflous</p>
      </div>
                      </a>
                  </div>

</div>

          </div>
          <img src="/icons/image-contact.png" alt="image-contact" className="image-contact" />

    </section>
  );
}
