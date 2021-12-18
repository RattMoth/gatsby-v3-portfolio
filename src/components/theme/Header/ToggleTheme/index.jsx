import React, { useRef, useContext, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import sunIcon from '../../../../assets/icons/sun.svg';
import moonIcon from '../../../../assets/icons/moon.svg';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeRef = useRef();

  const showTooltip = () => {
    ReactTooltip.show(themeRef.current);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    if (prefersDarkMode) {
      showTooltip();
    }
  });

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <ReactTooltip
        clickable
        backgroundColor="#2f3435"
        delayShow={2000}
        place="bottom"
        id="theme-tooltip"
      />
      <img
        ref={themeRef}
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt={theme}
        data-for="theme-tooltip"
        data-tip="Your browser is set to prefer dark mode. If you like, click here to toggle theme."
      />
    </Wrapper>
  );
};

export default ToggleTheme;
