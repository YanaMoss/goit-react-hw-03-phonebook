import styled from '@emotion/styled';

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  border: 2px solid #333333;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(42, 136, 136);
  outline: none;
  &: focus {
    border: 5px solid rgb(42, 136, 136);
  } ;
`;

export const Label = styled.label`
  padding: 15px 15px 0px 15px;
`;
