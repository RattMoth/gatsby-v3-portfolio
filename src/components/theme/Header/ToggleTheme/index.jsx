import React, { useContext, useEffect, useState } from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import sunIcon from '../../../../assets/icons/sun.svg';
import moonIcon from '../../../../assets/icons/moon.svg';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Wrapper } from './styles';

const renderTooltip = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip id="theme-tooltip" {...props}>
    Your device auto-selected dark mode.
  </Tooltip>
);

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [themeTooltipWillShow, setThemeTooltipWillShow] = useState(false);

  const flashTooltip = () => {
    setTimeout(() => {
      setThemeTooltipWillShow(true);
      setTimeout(() => setThemeTooltipWillShow(false), 3000);
    }, 1500);
  };

  const handleClick = () => {
    toggleTheme();
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;

    if (prefersDarkMode && theme === 'dark') {
      flashTooltip();
    }
  }, [theme]);

  return (
    <Wrapper type="button" onClick={handleClick}>
      <OverlayTrigger
        show={themeTooltipWillShow}
        placement="bottom"
        delay={{ show: 2250, hide: 400 }}
        overlay={renderTooltip}
      >
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt={theme} />
      </OverlayTrigger>
    </Wrapper>
  );
};

export default ToggleTheme;
