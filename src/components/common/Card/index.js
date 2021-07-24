import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  padding: 1rem;
  background: ${({ theme }) => (theme === 'dark' ? '#181717' : '#fff')};
  height: 100%;
  border-radius: 10px;

  .gatsby-img:hover {
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
    transition: transform 0.25s ease-in-out;
    -webkit-transition: transform 0.25s ease-in-out;
    -moz-transition: transform 0.25s ease-in-out;
    -ms-transition: transform 0.25s ease-in-out;
  }

  .image-container {
    position: relative;
  }

  .image-container .gatsby-img {
    display: block;
  }

  .fullscreen-icon {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
