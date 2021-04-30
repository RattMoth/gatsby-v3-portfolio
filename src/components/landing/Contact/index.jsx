import React from 'react';
import contact from '../../../assets/illustrations/contact.svg';
import { Container } from '../../common/Container';
import { Wrapper, Details, Thumbnail } from './styles';
// import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h2> Lorem Ipsum</h2>
      {/* <ContactForm /> */}
    </Details>
    {/* <Thumbnail>
      <img
        src={contact}
        alt="My name is Matt Roth and I'm a fullstack developer"
      />
    </Thumbnail> */}
  </Wrapper>
);
