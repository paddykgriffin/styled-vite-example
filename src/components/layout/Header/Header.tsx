import { useEffect, useState } from 'react';
import HeaderNav from '../../navigation/HeaderNav';
import Container from '../Container';
import styled from 'styled-components';
import SiteLogo from '../../common/Logo/Logo';
import { useHeader } from '@/components/layout/Header/HeaderContext';
import SidebarNav from '@/components/navigation/SidebarNav';
import useWindowSize from '@/hooks/useWindowSize';

interface HeaderWrapperProps {
  $offset: string;
  $scrolled: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  padding: 1rem;
  color: var(--white);
  background-color: ${({ $scrolled }) => ($scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent')};
  position: fixed;
  z-index: 500;
  width: 100%;
  top: ${({ $offset }) => $offset};
  transition: top 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 992px) {
    padding: 2rem;
  }
`;

const ElementsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    max-width: 1200px;
    justify-content: space-between;
  }
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

  const { width } = useWindowSize();

  return (
    <HeaderWrapper $offset={offset} $scrolled={scrolled}>
      <HeaderContainer>
        <SiteLogo />
        {width && width >= 769 && (
          <ElementsWrap>
            <HeaderNav />
          </ElementsWrap>
        )}

        {width && width <= 768 && <SidebarNav />}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
