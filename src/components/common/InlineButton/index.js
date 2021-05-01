import styled from 'styled-components';

export const CheckBoxLabel = styled.label`
  user-select: none;
  padding: 0 1rem;
  color: #96979c;
  border: 2px solid #96979c;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.7rem;
`;
export const CheckBox = styled.input`
  user-select: none;
  display: none;
  z-index: 1;
  }
  &:checked + ${CheckBoxLabel} {
    background: #aadcec;
    color: #fff;
    font-size: 1.9rem;
  }
  &:hover :not(:checked) + ${CheckBoxLabel}{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform 0.25s ease-in-out;
    -webkit-transition: transform 0.25s ease-in-out;
    -moz-transition: transform 0.25s ease-in-out;
    -ms-transition: transform 0.25s ease-in-out;
  }
`;
