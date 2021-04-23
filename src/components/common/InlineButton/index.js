import styled from 'styled-components';

export const CheckBoxLabel = styled.label`
  user-select: none;
  padding: 0 1rem;
  color: #96979c;
  border: 2px solid #96979c;
  border-radius: 3px;
  cursor: pointer;
`;
export const CheckBox = styled.input`
  user-select: none;
  display: none;
  z-index: 1;
  }
  &:checked + ${CheckBoxLabel} {
    background: #aadcec;
    color: #fff;
  }
`;
