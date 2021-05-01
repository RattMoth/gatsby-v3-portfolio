import React, { useContext, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, CheckBox, CheckBoxLabel } from '../../common';
import { Wrapper, SkillsWrapper, Details } from './styles';

const short =
  "Hey thanks for checking out my site! I'm a self-taught developer with about 1.5 years of professional experience. I specialize in React.js, and I am familiar with Python backends such as Flask and Django. I'm also a Linux hobbyist and have been using Debian-based distros as my main OS for the last 10 years (mainly Ubuntu and Linux Mint, who has time for Arch?). My interests aren't limited only to tech, I have hobbies in just about every category and I'm always on the lookout for more! If you want to learn more about me feel free to browse my projects below, reach out using any of my contact links, or just flip that toggle switch above!";

const long = `Hello! Welcome to the detailed intro. You probably have some questions. I'll try to answer everything in a few short paragraphs!\n\nMy self-taught background is thanks to my interest in tech.... 

I've been interested in programming since high school; I saw the original Tron movie and bought a C++ book to find out what computers are really doing when they run a program. Despite my interest, professional programming always seemed out of my reach. A career in this field seemed like it was reserved for those who "loved math." Thankfully I discovered that`;

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [aboutLength, setAboutLength] = useState(short);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        {/* <Thumbnail>
          <img src={skill} alt="I'm Matt! A fullstack web dev." />
        </Thumbnail> */}
        <Details theme={theme}>
          <h1>
            A{' '}
            <CheckBox
              id="checkbox1"
              type="radio"
              name="length-toggle"
              // Allow short to be selected by default
              defaultChecked
              onClick={() => setAboutLength(short)}
            />
            <CheckBoxLabel htmlFor="checkbox1">little</CheckBoxLabel>
            <CheckBox
              id="checkbox2"
              type="radio"
              name="length-toggle"
              onClick={() => setAboutLength(long)}
            />
            {'  '}
            <CheckBoxLabel htmlFor="checkbox2">lot</CheckBoxLabel> about me.
          </h1>
          <p>{aboutLength}</p>
          <Button as={AnchorLink} href="#contact">
            Hire me plz i like $$
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
