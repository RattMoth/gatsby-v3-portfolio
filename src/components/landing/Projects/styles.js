import styled from 'styled-components';
import detailsIllustration from '../../../assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: 40vh;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const ProjectWrapper = styled.div`
  padding: 2rem 0;

  p {
    font-size: 1.25rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#19323C' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#fff')};
  }

  a:visited {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? 'black' : 'black')};
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 1.16;
  border: 1px solid gray;
  padding: 0.125rem;
  background-color: #ebebeb;
  margin: 0 0.5rem;
`;
