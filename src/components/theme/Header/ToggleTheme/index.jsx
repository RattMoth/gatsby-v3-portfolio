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

  const handleClick = () => {
    toggleTheme();
    ReactTooltip.hide(themeRef.current);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    if (prefersDarkMode) {
      showTooltip();
    }
  }, []);

  return (
    <Wrapper type="button" onClick={handleClick}>
      <ReactTooltip
        style={{ width: '15ch !important' }}
        html
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
        data-tip="Your device auto-selected dark mode."
        // data-tip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et modi officia expedita nisi, quasi quae."
      />
    </Wrapper>
  );
};

export default ToggleTheme;
