import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === 'dark' ? 'difference' : 'unset'};
  }
`;
