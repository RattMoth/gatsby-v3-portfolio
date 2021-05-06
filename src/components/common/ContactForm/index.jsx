/* eslint-disable */
import React, { useState, useRef } from 'react';
import { Form } from './styles';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        subject,
        message,
      }),
    })
      .then(() =>
        alert("Thank's for the message! I'll get back to you as soon as I can.")
      )
      .catch((error) => alert(error));
  };

  return (
    <Form>
      <form
        className="cf"
        method="post"
        name="contact"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="half left cf">
          <input type="hidden" name="form-name" value="contact" />
          <input
            required
            type="text"
            name="name"
            value={name}
            id="input-name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            name="email"
            value={email}
            id="input-email"
            autoComplete="true"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="text"
            name="subject"
            value={subject}
            id="input-subject"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="half right cf">
          <textarea
            required
            name="message"
            type="text"
            value={message}
            id="input-message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input
          type="submit"
          id="input-submit"
          name="submit"
          value="Submit Message"
        />
      </form>
    </Form>
  );
};

export default ContactForm;
