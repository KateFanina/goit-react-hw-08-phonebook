import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: blue;
  font-size: 24px;

  &:hover {
    color: yellow;
  }
`;
export { Link };
