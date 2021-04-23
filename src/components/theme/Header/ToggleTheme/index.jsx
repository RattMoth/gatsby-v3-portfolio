import React, { useContext } from 'react';
import sunIcon from '../../../../assets/icons/sun.svg';
import moonIcon from '../../../../assets/icons/moon.svg';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
