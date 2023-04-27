import styled from 'styled-components';

const Input = styled.input`
  color: #2a2a2a;
  font-size: 18px;
  border-radius: 8px;
  border-color: blue;
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  &:focus {
    outline-color: #2196f3;
  }
`;

const FindName = styled.div`
  font-size: 22px;
  color: blue;
`;

export { Input, FindName };
