import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

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
  </Wrapper>
);

export default Navbar;

/** TODO:
 * Tooltip anchhoring is odd because ToggleTheme is rendered twice, but hidden from display. Find a way to conditionally render. I.e. wtf is the `desktop` prop up there??
 *
 * Figure that out, then add in proper logic. Use cookie set to expire in a week(?) to keep from spamming tooltip
 *
 * SOLUTION OUTLINE
 * NavbarLinks is used in Sidebar and here in Navbar, and the styling is determined by the presence or absence of the desktop prop. Because only styling is affected and the component is used in two places, a double render occurs.
 * 
 * Instead of just styling based on a prop, I will refactor to render the component based on screen size:
 *  Sidebar will only render NavbarLinks if screen size is small
 *  Navbar will only render if screen size is big
 * This can be controlled by a useCheckSmallScreen custom hook
 * 
 * Something like Jay Mayu's answer found at https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto should work perfectly:
 * 
 * 
 * import React, {useEffect, useState} from "react";

const useCheckSmallScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}

export default useCheckSmallScreen
 */
