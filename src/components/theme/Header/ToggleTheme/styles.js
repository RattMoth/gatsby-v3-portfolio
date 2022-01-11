import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: 0 1rem;
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
    margin-left: 1rem;
  }

  @media (max-width: 959px) {
    margin-right: 1.75rem;
  }

  @media (max-width: 490px) {
    margin-right: 2.75rem;
  }

  img {
    // padding-left: 1.5rem;
    margin-bottom: unset;
  }
`;
