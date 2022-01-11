import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95vw;
  bottom: 40px;
  height: 20px;
  font-size: 2.25rem;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 830px) {
    left: 90vw;
  }
`;
