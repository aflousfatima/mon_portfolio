import { motion } from 'framer-motion';
import './Body.css'; // Import du CSS séparé
import TypingEffect from './TypingEffect';


const Body = () => {
    return (
        <main className="body">
<div id="home"  className="image2-container">
  <img src="WA3.PNG" alt="Me" className="image2" />
</div>
            <div className="content-container">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="image-container"
          >
                    <img src="public/try3.PNG" alt="Fatima Aflous" className="profile-image float" />
                 
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="welcome-section"
          >
<h1 className="welcome-title">
<span className="hello">Hello, I’m</span><br />
  <span className="highlight">Fatima Aflous</span>
</h1>

<TypingEffect texts={[
  "DevOps & Cloud Engineer",
  "Full Stack Developer",
  "CI/CD & Infrastructure as Code"
]} />

 <p className="welcome-text">
 I build scalable systems, automate everything, and craft beautiful digital experiences — passionate about technology and eager to keep learning and growing every day.
</p>

            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
                    </motion.button>
                    
          </motion.div>
            </div>
        </main>
        
    );
    
  };
export default Body;