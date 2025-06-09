import HeaderNav from '../navigation/HeaderNav';
//import siteConfig from '../../site-config';
import Container from './Container';
import styled from 'styled-components';
import SiteLogo from '../common/Logo/Logo';
import { ModeToggle } from './ModeToggle';

const HeaderWrapper = styled.header`
  padding: 2rem;
  color: var(--white);
  background-color: var(--primary);
`;

const ElementsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SiteLogo />
        <ElementsWrap>
          <HeaderNav />
          <ModeToggle />
        </ElementsWrap>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
