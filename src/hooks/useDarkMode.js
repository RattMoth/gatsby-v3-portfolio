import { useState, useEffect } from 'react';
import useMedia from './useMedia';

export default () => {
  const [theme, setTheme] = useState('light');

  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      if (!prefersDarkMode) {
        window.localStorage.setItem('theme', 'dark');
      }
      setTheme('dark');
    } else {
      if (!prefersDarkMode) {
        window.localStorage.setItem('theme', 'light');
      }
      setTheme('light');
    }
  };

  useEffect(() => {
    console.log('kark check');
    if (prefersDarkMode) {
      window.localStorage.removeItem('theme');
      setTheme('dark');
    }
  }, [prefersDarkMode]);

  useEffect(() => {
    console.log('toh');
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      setTheme(localTheme);
    } else {
      setTheme('light');
    }
  }, []);

  return [theme, toggleTheme];
};
