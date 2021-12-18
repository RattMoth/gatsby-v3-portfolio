import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import ToggleTheme from '../ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  /**
   * The NavbarLinks component is used both in Sidebar and Navbar. The `desktop` prop determines which layout to use in the Wrapper styled component.
   */

  return (
    <>
      <Wrapper desktop={desktop} theme={theme}>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
      </Wrapper>
      {desktop && <ToggleTheme />}
    </>
  );
};

export default NavbarLinks;
