import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 100, pause = 1500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < texts[index].length) {
        setDisplayText(texts[index].substring(0, subIndex + 1));
        setSubIndex(prev => prev + 1);
      } else if (deleting && subIndex > 0) {
        setDisplayText(texts[index].substring(0, subIndex - 1));
        setSubIndex(prev => prev - 1);
      } else if (!deleting && subIndex === texts[index].length) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, pause]);

  return (
    <span className="welcome-text typing-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
