import styled from 'styled-components';
//import { FooterMenuLinks } from '../navigation/FooterMenuLinks';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  data: MenuItem[];
}

export interface MenuItem {
  title: string;
  path: string;
  target?: string;
}

export const LinksOne: Array<MenuItem> = [
  {
    title: 'About Paddy Hiker',
    path: '#',
  },
  {
    title: 'Contributors & Writers',
    path: '#',
  },
  {
    title: 'Write For Us',
    path: '#',
  },
  {
    title: 'Contact Us',
    path: '#',
  },
  {
    title: 'Privacy Policy',
    path: '#',
  },
];

export const LinksTwo: Array<MenuItem> = [
  {
    title: 'The Team',
    path: '#',
  },
  {
    title: 'Jobs',
    path: '#',
  },
  {
    title: 'Press',
    path: '#',
  },
];

const FooterNav = ({ data }: Props) => {
  return (
    <NavWrapper>
      {data.map(item => (
        <NavLink to={item.path} key={item.title}>
          {item.title}
        </NavLink>
      ))}
    </NavWrapper>
  );
};

export default FooterNav;
