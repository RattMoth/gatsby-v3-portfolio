import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import useMedia from '../../../../hooks/useMedia';
import sunIcon from '../../../../assets/icons/sun.svg';
import moonIcon from '../../../../assets/icons/moon.svg';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeRef = React.useRef();
  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );

  const showTooltip = () => {
    ReactTooltip.show(themeRef.current);
  };

  React.useEffect(() => {
    if (prefersDarkMode && window.localStorage.getItem('theme') === 'dark') {
      showTooltip();
    }
  }, [prefersDarkMode]);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <ReactTooltip
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
