import React, { createContext, useContext, useMemo, useRef } from 'react';
import siteConfig from '@/site-config';
import { useScroll } from '@/hooks/useScroll';

interface HeaderContextType {
  isNavTransparent: boolean;
  isNavVisible: boolean;
  mainNavRef: React.RefObject<HTMLElement | null>;
}

interface HeaderProviderProps {
  children: React.ReactNode;
  disableTransparentHeader?: boolean;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children, disableTransparentHeader }) => {
  const { isTop, isScrollingUp } = useScroll();
  const { transparent, hideOnScroll } = siteConfig.layout.header;
  const mainNavRef = useRef<HTMLElement>(null);

  const headerState = useMemo(() => {
    const isNavTransparent = !disableTransparentHeader && transparent && isTop;
    const isNavVisible = hideOnScroll ? isScrollingUp || isTop : true;

    return {
      isNavTransparent,
      isNavVisible,
      mainNavRef,
    };
  }, [isTop, isScrollingUp, transparent, hideOnScroll, disableTransparentHeader]);

  return <HeaderContext.Provider value={headerState}>{children}</HeaderContext.Provider>;
};
