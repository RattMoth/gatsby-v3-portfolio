import React from 'react';
import { Container } from '../../common/Container';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Matt Roth</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          and{' '}
          <span aria-label="coffee" role="img">
            ☕
          </span>
          {' | '}
        </span>
        <span>
          Design inspired by{' '}
          <a href="https://github.com/smakosh/gatsby-portfolio-dev">smakosh</a>
        </span>
      </Details>
    </Flex>
  </Wrapper>
);
