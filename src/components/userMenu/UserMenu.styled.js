import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Username = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: white;
`;

const ButtonLogOut = styled.button`
  font-size: 16px;
  border-radius: 5px;
  border: navajowhite;
  padding: 8px;
  background-color: blue;
  color: currentColor;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export { Wrapper, Username, ButtonLogOut };
