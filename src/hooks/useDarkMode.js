import { useState, useEffect } from 'react';
// import useMedia from './useMedia';

export default () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  // To do fix this:
  // Created toggling complications
  // const prefersDarkMode = useMedia(
  //   ['(prefers-color-scheme: dark)'],
  //   [true],
  //   false
  // );

  useEffect(() => {
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
