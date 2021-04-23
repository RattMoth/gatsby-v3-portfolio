import React, { useContext } from 'react';
// import { Link } from 'gatsby';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, ThemeTogglerDiv } from './styles';
import ToggleTheme from '../ToggleTheme';
// import Pdf from '../../../../../static/matt-roth-resume.pdf';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand href="#" theme={theme}>
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
