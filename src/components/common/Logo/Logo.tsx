import useCurrentTheme from '@/hooks/useCurrentTheme';
import LogoDark from '@/assets/images/LogoDark.svg';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/images/Logo.svg';
import siteConfig from '@/site-config';
import styled from 'styled-components';

const BrandLogo = styled.img`
  height: 30px;
`;

export default function SiteLogo() {
  const { currentTheme } = useCurrentTheme();
  const LogoToRender = currentTheme === 'dark' ? LogoDark : Logo;

  return (
    <NavLink to="/">
      <BrandLogo src={LogoToRender} alt={siteConfig.siteName} />
    </NavLink>
  );
}
