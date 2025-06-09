import { useEffect, useState } from 'react';

interface ScrollState {
  isTop: boolean;
  isScrollingUp: boolean;
  scrollY: number;
}

export const useScroll = (threshold: number = 30) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isTop: true,
    isScrollingUp: true,
    scrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;
      const isTop = currentScrollY < threshold;

      setScrollState({
        isTop,
        isScrollingUp,
        scrollY: currentScrollY,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollState;
};
