import { useEffect, useState } from 'react';
import HeaderNav from '../../navigation/HeaderNav';
// import siteConfig from '../../site-config';
import Container from '../Container';
import styled from 'styled-components';
import SiteLogo from '../../common/Logo/Logo';
//import { ModeToggle } from '../ModeToggle';
import { useHeader } from '@/components/layout/Header/HeaderContext';

interface HeaderWrapperProps {
  $offset: string;
  $scrolled: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  padding: 2rem;
  color: var(--white);
  background-color: ${({ $scrolled }) => ($scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent')};
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: ${({ $offset }) => $offset};
  transition: top 0.3s ease-in-out;
`;

const ElementsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem;
`;

export default function Header() {
  const { isNavVisible, mainNavRef } = useHeader();
  const [offset, setOffset] = useState('80px');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateOffset = () => {
      const height = mainNavRef.current?.offsetHeight || 80;
      setOffset(isNavVisible ? '0px' : `-${height}px`);
    };

    // Delay to ensure DOM has rendered
    const timeout = setTimeout(updateOffset, 0);

    return () => clearTimeout(timeout);
  }, [isNavVisible]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // You can tweak the threshold
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper $offset={offset} $scrolled={scrolled}>
      <HeaderContainer>
        <SiteLogo />
        <ElementsWrap>
          <HeaderNav />
          {/* <ModeToggle /> */}
        </ElementsWrap>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
