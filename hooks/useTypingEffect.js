'use client';

import { useState, useEffect } from 'react';

export function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
