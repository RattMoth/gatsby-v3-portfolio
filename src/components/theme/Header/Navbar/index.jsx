import React, { useContext } from 'react';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, ThemeTogglerDiv } from './styles';
import ToggleTheme from '../ToggleTheme';
import resume from '../../../../../static/documents/matt-roth-resume.pdf';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand href={resume} target="_blank" theme={theme}>
        My Résumé
      </Brand>
      <NavbarLinks desktop />
      <ThemeTogglerDiv>
        <ToggleTheme />
      </ThemeTogglerDiv>
    </Wrapper>
  );
};

export default Navbar;
