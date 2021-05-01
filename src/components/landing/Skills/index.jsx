import React, { useContext, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, CheckBox, CheckBoxLabel } from '../../common';
import { Wrapper, SkillsWrapper, Details } from './styles';

const short =
  "Hey thanks for checking out my site! I'm a self-taught developer with about 1.5 years of professional experience. I specialize in React.js, and I am familiar with Python backends such as Flask and Django. I'm also a Linux hobbyist and have been using Debian-based distros as my main OS for the last 10 years (mainly Ubuntu and Linux Mint, who has time for Arch?). If you want to learn more about me feel free to browse my projects below or reach out using any of my contact links!";

const long = `Hello! I started my coding journey after graduating college in 2018. Since then I've gained experience through volunteer work, coding meetups, and by working alongside some brilliant people in the L.A. start-up scene. I say I only have 1.5 years of "professional experience" because it's only recently that I've actually started to receive W-2s with the job title of "Developer." Regardless of how my experience is quantified, I believe that I've spent enough time pursuing this career to know that it is something I truly enjoy.

I've been interested in programming since high school; I saw the original Tron movie and bought a C++ book to find out what computers are really doing when they run a program. That book was far too advanced for High School Matt. After a few months of failed learning I became discouraged, and despite my interest professional programming seemed out of my reach. I believed that a career in this field was reserved for those who "loved math." So my interest in tech had to manifest itself in different ways, predominantly by tinkering around with Linux and getting a little too into Android phones. I've grown quite a bit since then, and thankfully I discovered that the only thing required is a desire to learn the concepts. I just had to take some time to "learn how to learn." Or in other words, I just had to spend some time in higher education and realize that High School Matt was maybe a little too hard on himself.

If you'd like to get in contact please feel free to use any of the contact links below. I'd be happy to discuss jobs, the web development scene, or just tech in general. I have many interests outside of computers too, I tend to collect hobbies. If you reach out I'm sure we'd have something to talk about.

Thanks for reading!
`;

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [aboutLength, setAboutLength] = useState(short);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
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
            Let&apos;s get in contact!
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
