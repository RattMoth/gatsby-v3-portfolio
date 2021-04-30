import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop';
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
            <h4>
              My name is Matt Roth. I&apos;m a Full Stack Web Developer and{' '}
              <TextLoop
                adjustingSpeed="1"
                delay="1500"
                interval={[3000, 5000, 5000, 5000, 5000, 5000]}
              >
                <p>Linux enthusiast</p>
                <p>backpacker</p>
                <p>coffee nerd</p>
                <p>bad chess player</p>
                <p>fountain pen collector</p>
                <p>whiskey nerd</p>
              </TextLoop>
              .
            </h4>
          </Fade>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hey I'm Matt!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
