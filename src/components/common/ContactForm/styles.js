import styled from 'styled-components';

export const Form = styled.div`
  form {
    max-width: 600px;
    text-align: center;
    margin: 20px auto;
  }

  form input,
  form textarea {
    border: 0px;
    outline: 0;
    padding: 1em;
    border-radius: 8px;
    display: block;
    width: 100%;
    margin-top: 1em;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
    resize: none;
    background-color: #f5f5f180;
  }

  form input:focus,
  form textarea:focus {
    box-shadow: 0 0px 2px #e74c3c !important;
  }

  form #input-submit {
    color: white;
    background: #e74c3c;
    cursor: pointer;
  }

  form #input-submit:hover {
    box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
  }

  form textarea {
    height: 12.5rem;
  }

  .half {
    float: left;
    width: 48%;
    margin-bottom: 1em;
  }

  .right {
    width: 50%;
  }

  .left {
    margin-right: 2%;
  }

  @media (max-width: 480px) {
    .half {
      width: 100%;
      float: none;
      margin-bottom: 0;
    }
  }

  /* Clearfix */
  .cf:before,
  .cf:after {
    content: ' ';
    /* 1 */
    display: table;
    /* 2 */
  }

  .cf:after {
    clear: both;
  }
`;
