import styled from 'styled-components';
import overlayIllustration from '../../../assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    padding-bottom: 0;
  }
`;

export const IntroWrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
      mix-blend-mode: ${({ theme }) =>
        theme === 'dark' ? 'difference' : 'unset'};
    }

    @media (max-width: 680px) {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 2.6rem;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'dark' ? '#e6e6e6' : '#707070')};

    mix-blend-mode: ${({ theme }) =>
      theme === 'dark' ? 'difference' : 'unset'};

    @media (max-width: 680px) {
      font-size: 2rem;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
