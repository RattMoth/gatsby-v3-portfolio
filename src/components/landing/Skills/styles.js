import styled from 'styled-components';
import detailsIllustration from '../../../assets/illustrations/details.svg';

export const Wrapper = styled.div`
  // background-image: url(${detailsIllustration});
  // background-size: 25vh;
  // background-position: right top;
  // background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding-top: 0;
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#19323C')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'light' ? 'unset' : 'difference'};
    }
  }

  p {
    white-space: pre-line;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.5;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
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
