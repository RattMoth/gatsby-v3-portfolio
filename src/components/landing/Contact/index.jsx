import React, { useContext } from 'react';
import github from '../../../assets/icons/gitHub.png';
import fcc from '../../../assets/icons/fcc.jpg';
import linkedin from '../../../assets/icons/linkedin.png';
import twitter from '../../../assets/icons/twitter.png';
import { Container } from '../../common/Container';
import { Wrapper, Details } from './styles';
import { ThemeContext } from '../../../providers/ThemeProvider';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <h1>Let&apos;s get in touch!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          exercitationem totam quisquam amet quae! Ad dicta fugit earum
          molestiae eum reiciendis nulla obcaecati, nam fuga?
        </p>
        <div id="form">
          <form className="cf">
            <div className="half left cf">
              <input type="text" id="input-name" placeholder="Name" />
              <input
                type="email"
                id="input-email"
                placeholder="Email address"
              />
              <input type="text" id="input-subject" placeholder="Subject" />
            </div>
            <div className="half right cf">
              <textarea
                name="message"
                type="text"
                id="input-message"
                placeholder="Message"
              />
            </div>
            <input type="submit" value="Submit" id="input-submit" />
          </form>
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
    </Wrapper>
  );
};

// TO DO
/**
 * Correct styles.js to properly use the scss styling in this context
 * Add recaptcha for submit button
 * Add mattroth.dev diagram??
 * import project details
 */
