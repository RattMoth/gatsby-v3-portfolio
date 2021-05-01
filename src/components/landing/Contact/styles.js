import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

export const Details = styled.div`
  flex: 1;
  h1 {
    text-align: center;
  }

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h4 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'light' ? '#19323C' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'light' ? 'unset' : 'difference'};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'light' ? 'unset' : 'difference'};
    }
  }

  #contact-links-container {
    margin: 3em auto 5em auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 960px) {
      padding-bottom: 0px;
      margin-bottom: 0;
    }
  }

  #contact-links-container img {
    border-radius: 100px;
    height: 9rem;
    width: 9rem;
    padding: 1rem;

    @media (max-width: 960px) {
      height: 8rem;
      width: 8rem;
    }
  }

  #contact-links-container img:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform 0.25s ease-in-out;
    -webkit-transition: transform 0.25s ease-in-out;
    -moz-transition: transform 0.25s ease-in-out;
    -ms-transition: transform 0.25s ease-in-out;
  }

  #contact-links-container img:active {
    transform: translateY(4px);
  }

  #form {
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
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
