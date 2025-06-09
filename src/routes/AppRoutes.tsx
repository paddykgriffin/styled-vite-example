import { createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </>,
  );
};
