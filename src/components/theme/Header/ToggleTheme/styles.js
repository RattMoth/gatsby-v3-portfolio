import styled from 'styled-components';

export const Wrapper = styled.button`
  padding-right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: left;
  }

  @media (min-width: 76px) {
    padding-right: 2.5rem;
  }

  img {
    // padding-left: 1.5rem;
    margin-bottom: unset;
  }
`;
