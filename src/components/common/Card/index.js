import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  padding: 1rem;
  background: ${({ theme }) =>
    theme === 'dark' ? 'rgba(24,27,26,.9)' : '#fff'};
  height: 100%;
  border-radius: 10px;

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
