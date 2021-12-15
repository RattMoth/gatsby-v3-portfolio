import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, ThemeTogglerDiv } from './styles';
import ToggleTheme from '../ToggleTheme';

const Navbar = () => (
  <Wrapper as={Container}>
    <DropdownButton id="resume-dropdown" title="My Résumé" size="sm">
      <Link className="dropdown-item" to="/resume">
        View Online
      </Link>
      <Dropdown.Item href="matt-roth-resume.pdf" download>
        Download a Copy
      </Dropdown.Item>
    </DropdownButton>
    <NavbarLinks desktop />
    <ThemeTogglerDiv>
      <ToggleTheme />
    </ThemeTogglerDiv>
  </Wrapper>
);

export default Navbar;
