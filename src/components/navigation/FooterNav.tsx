import styled from 'styled-components';
import { FooterMenuLinks } from '../navigation/FooterMenuLinks';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const FooterNav = () => {
  return (
    <NavWrapper>
      {FooterMenuLinks.map(item => (
        <NavLink to={item.path} key={item.title}>
          {item.title}
        </NavLink>
      ))}
    </NavWrapper>
  );
};

export default FooterNav;
