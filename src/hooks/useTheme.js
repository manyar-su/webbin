import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const stored = localStorage.getItem('webin-theme') || 'dark';
    setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('webin-theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };
  return { theme, toggle };
}