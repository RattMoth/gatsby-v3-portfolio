import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
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

  h4 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'light' ? 'unset' : 'difference'};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === 'light' ? 'unset' : 'difference'};
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
