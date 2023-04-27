import styled from 'styled-components';

const Form = styled.form`
  width: 400px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LoginInput = styled.input`
  color: #2a2a2a;
  font-size: 18px;
  border-radius: 8px;
  border-color: blue;
  padding: 8px;
  width: 100%;
  &:focus {
    outline-color: #2196f3;
  }
`;
const LoginButton = styled.button`
  font-weight: 600;
  color: #ffffff;
  background: dodgerblue;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 30%), 2px 0px 2px rgb(0 0 0 / 14%),
    0px 0px 3px rgb(0 0 0 / 20%);
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  &:hover {
    scale: 1.1;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  width: 150px;
`;

export { Form, Label, LoginInput, LoginButton };
