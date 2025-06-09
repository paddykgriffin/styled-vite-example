import styled from 'styled-components';
import { HeaderMenuLinks } from '../navigation/HeaderMenuLinks';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 1rem;

  a {
    text-decoration: none;
    color: var(--text-color);
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
