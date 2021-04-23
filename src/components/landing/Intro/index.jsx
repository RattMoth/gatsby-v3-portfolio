import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Header } from '../../theme';
import { Container } from '../../common';
import dev from '../../../assets/illustrations/dev.svg';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <Fade bottom duration={1000} delay={500}>
            <h1>Hi There!</h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000}>
            <h4>My name is Matt Roth. I&apos;m a Full Stack Web Developer.</h4>
          </Fade>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hey I'm Matt!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
