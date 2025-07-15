import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    color: white;
  }

  svg {
    width: 2rem;
    height: 2rem;
    transition: all 0.2s ease;
  }
`;

export const StyledContent = styled.div`
  width: 100vw;
  padding: 0;

  @media (min-width: 640px) {
    width: 450px;
  }
`;

export const StyledHeader = styled.div`
  display: none;
  padding: 1.5rem;
`;

export const StyledNavWrapper = styled.div`
  margin-top: 3.5rem;
`;

export const StyledNavTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d1d5db;
  padding: 0.75rem 1.5rem;
`;

export const StyledNavList = styled.ul``;

export const StyledNavItem = styled.li`
  border-bottom: 1px solid #d1d5db;
`;

export const StyledNavLink = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  flex-grow: 1;
  padding: 1rem 1.5rem;
  color: black;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  &[aria-current='page'] {
    font-weight: bold;
    color: var(--color-primary); // adjust as needed
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    &:hover {
      background-color: #374151;
    }
  }
`;
