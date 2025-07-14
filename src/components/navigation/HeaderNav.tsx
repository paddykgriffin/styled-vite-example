import styled from 'styled-components';
import { HeaderMenuLinks } from '../navigation/HeaderMenuLinks';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-right: 1rem;

  a {
    text-decoration: none;
    color: var(--text-white);
    position: relative;

    &:before {
      display: block;
      position: absolute;
      content: '';
      height: 0.08125em;
      width: 0%;
      transition: width 300ms ease;
      left: 0;
      bottom: -6px;
      background: var(--gold);
    }

    &:hover {
      color: var(--gold);
      &:before {
        width: 100%;
      }
    }
  }
`;

const HeaderNav = () => {
  return (
    <NavWrapper>
      {HeaderMenuLinks.map(item => (
        <NavLink to={item.path} key={item.title}>
          {item.title}
        </NavLink>
      ))}
    </NavWrapper>
  );
};

export default HeaderNav;
