import styled from 'styled-components';
import contactIllustration from '../../../assets/illustrations/contact-overlay.svg';

export const Wrapper = styled.div`
  background-image: url(${contactIllustration});
  background-size: 30vh;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const ContactWrapper = styled.div`
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
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#19323C')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'dark' ? 'difference' : 'unset'};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'dark' ? 'difference' : 'unset'};
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
