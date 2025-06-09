import React, { type ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@/components/typography/Typography';
import type { HTMLProps } from '@/types/common.types';
import Container from '@/components/layout/Container';
import { HeroContextType, ContentProps, BackgroundProps, HeroComposition, ScrollIconProps } from './hero.interfaces';
import { LuChevronDown, LuMouse } from 'react-icons/lu';
import useWindowSize from '@/hooks/useWindowSize';

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (!context) {
    throw new Error('useHeroContext must be used within a Hero Component');
  }
  return context;
};

export interface HeroProps extends HTMLProps<'section'> {
  children: ReactNode;
}

const BackgroundWrapper = styled.div<{ isLoaded: boolean; subPageHero?: boolean }>`
  grid-column-start: 1;
  grid-row-start: 1;
  width: 100%;
  height: auto;
  transition: opacity 0.5s;
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
`;
const Overlay = styled.div<{ isLoaded: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s;
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
  z-index: 1;
`;

const Background = ({
  type,
  src,
  srcMobile,
  imageAlt = 'Hero Banner',
  hideTransparentLayer = false,
}: BackgroundProps) => {
  const { isLoaded, setIsLoaded } = useHeroContext();
  const mediaRef = useRef<HTMLImageElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (mediaRef.current) {
      if ((mediaRef.current as HTMLImageElement).complete) {
        setIsLoaded(true);
      } else {
        (mediaRef.current as HTMLImageElement).onload = () => setIsLoaded(true);
      }
    }
  }, [setIsLoaded]);

  return (
    <BackgroundWrapper isLoaded={isLoaded} id="background-image">
      {type === 'img' && (
        <img
          alt={imageAlt}
          src={width && width <= 640 ? srcMobile || src : src}
          ref={mediaRef}
          width={width && width <= 640 ? 600 : 992}
          style={{ width: '100%' }}
        />
      )}
      {!hideTransparentLayer && <Overlay isLoaded={isLoaded} aria-hidden="true" />}
    </BackgroundWrapper>
  );
};

const ContentWrapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

const Content = ({ children, className }: ContentProps) => {
  const { isLoaded } = useHeroContext();
  if (!isLoaded) return null;
  return (
    <ContentWrapper className={className} id="content">
      <Container className="py-0">{children}</Container>
    </ContentWrapper>
  );
};

const Title: React.FC<TypographyProps> = ({ children, className, textColor = 'default' }) => {
  return (
    <Typography variant="h1" className={className} textColor={textColor}>
      {children}
    </Typography>
  );
};

const SubTitle: React.FC<TypographyProps> = ({ children, className, textColor = 'default' }) => {
  return (
    <Typography variant="body1" className={className} textColor={textColor}>
      {children}
    </Typography>
  );
};

const ScrollIconWrapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  padding-bottom: 3rem;
  & p {
    color: var(--hero-white);
  }
`;
const ScrollButton = styled.button`
  cursor: pointer;
  animation: bounce 4s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;

  & svg {
    width: 40px;
    height: 40px;
    stroke: var(--hero-white);
  }
`;

const ScrollAlignment = styled.div<{ align: 'left' | 'center' | 'right' }>`
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
      default:
        return 'flex-end';
    }
  }};
`;

const ScrollIcon = ({ className, align = 'right' }: ScrollIconProps) => {
  const { isLoaded, heroBannerRef } = useHeroContext();

  const scrollToBottom = () => {
    if (heroBannerRef.current) {
      window.scrollTo({
        top: window.scrollY + heroBannerRef.current.getBoundingClientRect().bottom,
        behavior: 'smooth',
      });
    }
  };

  if (!isLoaded) return null;

  return (
    <ScrollIconWrapper id="scroll">
      <Container>
        <ScrollAlignment align={align}>
          <ScrollButton onClick={scrollToBottom} className={className}>
            <Typography variant="body2">scroll</Typography>
            <LuMouse />
            <LuChevronDown />
          </ScrollButton>
        </ScrollAlignment>
      </Container>
    </ScrollIconWrapper>
  );
};

const HeroSection = styled.section`
  position: relative;
  display: grid;
  width: 100%;
`;

const Hero: React.FC<HeroProps> & HeroComposition = Object.assign(
  ({ children, className, ...props }: HeroProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroBannerRef = useRef<HTMLDivElement | null>(null);

    return (
      <HeroContext.Provider value={{ isLoaded, setIsLoaded, heroBannerRef }}>
        <HeroSection id="hero-banner" ref={heroBannerRef} className={className} {...props}>
          {children}
        </HeroSection>
      </HeroContext.Provider>
    );
  },
  {
    Background,
    Content,
    Title,
    SubTitle,
    ScrollIcon,
  },
);

Hero.displayName = 'Hero';

export { Hero, Background, Content, Title, SubTitle, ScrollIcon };
