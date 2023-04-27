import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: blue;
  font-size: 26px;

  &:hover {
    color: yellow;
  }

  &:active {
    color: #e84a5f;
  }
`;
