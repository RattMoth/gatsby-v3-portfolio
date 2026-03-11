import React, { useContext, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container, CheckBox, CheckBoxLabel } from '../../common';
import { Wrapper, SkillsWrapper, Details } from './styles';

const short = `Hey, thanks for checking out my site! I’m a frontend / fullstack software engineer who enjoys building reliable, scalable web applications and shipping real products to users.

My work focuses primarily on React and TypeScript, with experience building APIs and services using Python frameworks like Django and FastAPI. I enjoy owning features end-to-end, collaborating closely with product and design, and turning complex workflows into intuitive user experiences.

Outside of coding I’m a longtime Linux enthusiast (Debian-based distros have been my daily driver for nearly a decade), and I enjoy exploring new tools, tinkering with systems, and occasionally going down deep technical rabbit holes.

Feel free to explore my projects below or reach out through any of the contact links!`;

const long = `
Hello! I’m a frontend / fullstack software engineer who enjoys building thoughtful, reliable web applications. My work primarily focuses on React and TypeScript on the frontend, with Python-based backends using Django and FastAPI. I’m especially interested in building systems that are both scalable and pleasant to work on — clean architecture, strong testing practices, and developer tooling are things I care a lot about.

My professional experience includes working on production React applications, contributing to features from early design all the way through launch. I enjoy collaborating closely with product and design teams, translating complex workflows into intuitive interfaces, and helping teams move quickly without sacrificing stability.

My interest in programming started back in high school after watching the original Tron movie and becoming curious about what computers are actually doing when they run a program. I even bought a C++ book to try to learn... which, unsurprisingly, was a bit ambitious at the time. While that first attempt didn’t quite work out, the curiosity stuck with me.

Over time that curiosity grew into a deeper interest in technology. I began teaching myself programming while continuing to experiment with Linux systems and development tools. Eventually I decided to pursue software engineering more seriously and enrolled in the Hack Reactor coding bootcamp, where I spent over 1,000 hours building applications and collaborating with other developers. After graduating, I transitioned into professional engineering roles and have been working full-time in the field ever since.

Outside of programming I tend to collect hobbies, explore new technologies, and dive into technical rabbit holes just for the fun of learning something new.

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
