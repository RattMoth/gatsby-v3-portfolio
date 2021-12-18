import { useState, useEffect } from 'react';
// import useMedia from './useMedia';

export default () => {
  const [theme, setTheme] = useState('light');

  // const prefersDarkMode = useMedia(
  //   ['(prefers-color-scheme: dark)'],
  //   [true],
  //   false
  // );
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    if (prefersDarkMode === null) {
      return;
    }
    if (prefersDarkMode) {
      setTheme('dark');
    } else {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme) {
        setTheme(localTheme);
        window.localStorage.setItem('theme', localTheme);
      } else {
        setTheme('light');
      }
    }
  }, [prefersDarkMode]);

  return [theme, toggleTheme];
};
