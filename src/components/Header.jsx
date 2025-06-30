import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import './Header.css'; // Import du CSS séparé

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        'Welcome to the interactive Terminal !',
        ' ', // espace 
        'Available commands:',
        '  help    - Show this help message',
        '  about   - About the portfolio',
        '  skills  - View skills',
        '  contact - Contact information',
        '  clear   - Clear terminal',
        '  exit    - Close terminal',
        ' ', // espace 
        'Type a command to begin',
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';
      switch (cmd) {
        case 'help':
          response = 'Available commands:\n  help    - Show this help message\n  about   - About the portfolio\n  skills  - View skills\n  clear   - Clear terminal\n  exit    - Close terminal';
          break;
        case 'about':
          response = 'Portfolio of Fati_DevOps: A passionate DevOps engineer and web developer.';
          break;
        case 'skills':
          response = 'Skills: React, TypeScript, AWS, Docker, CI/CD, Prometheus, Grafana';
              break;
        case 'contact':
          response = 'Portfolio of Fati_DevOps: A passionate DevOps engineer and web developer.';
          break;
        case 'clear':
          setOutput([]);
          setInput('');
          return;
        case 'exit':
          onClose();
          return;
        default:
          response = `Command not found: ${cmd}. Type 'help' for available commands.`;
      }
      setOutput([...output, `> ${input}`, response]);
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="terminal-container"
      >
        <motion.div
          className="terminal"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="terminal-top-bar">
            <div className="terminal-buttons">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-title"> </div>
            <button className="terminal-close-btn" onClick={onClose}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                <path d="M1 1l10 10M11 1L1 11" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="terminal-body">
            {output.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="terminal-line"
              >
                {line}
              </motion.div>
            ))}
          </div>
          <div className="terminal-input">
            <span className="terminal-prompt">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleCommand}
              className="terminal-input-field"
              autoFocus
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'About', icon: UserIcon },
    { name: 'Projects', icon: CodeBracketIcon },
    { name: 'Skills', icon: WrenchScrewdriverIcon },
    { name: 'Certifications', icon: TrophyIcon },
    { name: 'Resume', icon: DocumentTextIcon },
    { name: 'Contact', icon: EnvelopeIcon },
  ];

  return (
    <>
      <div className="header-container">
        <header className="header">
          <div className="header-content">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="logo"
            >
              Fatima Aflous
            </motion.h1>
            <nav className="nav desktop-nav">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#00FFFF' }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link"
                >
                  <item.icon className="nav-icon" />
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
              <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="nav mobile-nav"
            >
              <div className="nav-content">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className="nav-link mobile-nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="nav-icon" />
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </header>
        <motion.button
          whileHover={{ scale: 1.2, rotate: 360, boxShadow: '0 0 20px rgba(0, 191, 255, 0.7)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsTerminalOpen(true)}
          className="code-icon"
        >
        <svg className="code-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <rect x="3" y="3" width="18" height="16" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M6 9h3m-3 3h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  <line x1="6" y1="15" x2="9" y2="15" strokeWidth="2" strokeLinecap="round" />
</svg>
        </motion.button>
      </div>
      {isTerminalOpen && <Terminal onClose={() => setIsTerminalOpen(false)} />}
    </>
  );
};

export default Header;