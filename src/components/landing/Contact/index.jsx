import React, { useContext } from 'react';
import github from '../../../assets/icons/gitHub.png';
import gitlab from '../../../assets/icons/gitlab.png';
import fcc from '../../../assets/icons/fcc.jpg';
import linkedin from '../../../assets/icons/linkedin.png';
import twitter from '../../../assets/icons/twitter.png';
import { Container } from '../../common/Container';
import { Wrapper, Details, ContactWrapper } from './styles';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ContactForm from '../../common/ContactForm';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="contact">
      <ContactWrapper as={Container}>
        <Details theme={theme}>
          <h1>Let&apos;s get in contact!</h1>
          <p>
            Feel free to reach out using any of the links below! And
            there&apos;s a form too for those who prefer a more direct approach.
          </p>
          <div id="form">
            <ContactForm />
          </div>
          <div id="contact-links-container">
            <a
              target="_blank"
              href="https://github.com/RattMoth"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>

            <a
              target="_blank"
              href="https://gitlab.com/RattMoth"
              rel="noreferrer"
            >
              <img src={gitlab} alt="GitLab" />
            </a>

            <a
              target="_blank"
              href="https://www.freecodecamp.org/mattador"
              rel="noreferrer"
            >
              <img src={fcc} alt="freeCodeCamp" />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/matt-tyler-roth/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              target="_blank"
              href="https://twitter.com/ratt_moth"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </Details>
      </ContactWrapper>
    </Wrapper>
  );
};
