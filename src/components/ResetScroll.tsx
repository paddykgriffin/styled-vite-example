import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResetScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // or 'auto' if you want instant scroll
    });
  }, [pathname]);

  return null;
};

export default ResetScroll;
