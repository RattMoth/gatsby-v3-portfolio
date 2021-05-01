/* eslint-disable */
import React from 'react';
import { Form } from './styles';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.ContactForm = React.createRef();
    this.state = { name: '', email: '', subject: '', message: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = this.ContactForm.current;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state }),
    })
      .then(() => navigate('/'))
      .catch((error) => alert(error));

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  handleChange = (e) => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <Form>
        <form
          className="cf"
          method="post"
          name="contact"
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
            />
            <input
              required
              type="email"
              name="email"
              value={email}
              id="input-email"
              autoComplete="true"
              placeholder="Email address"
              onChange={this.handleChange}
            />
            <input
              required
              type="text"
              name="subject"
              value={subject}
              id="input-subject"
              placeholder="Subject"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" id="input-submit" value="Submit Message" />
        </form>
      </Form>
    );
  }
}

export default ContactForm;
