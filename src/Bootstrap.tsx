import { BrowserRouter } from 'react-router-dom';
import App from './routes/App';
import { ReactNode } from 'react';

const Bootstrap: React.FC = (): ReactNode => {
  let AppToRender = App;

  const AppContent = (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppToRender />
    </BrowserRouter>
  );

  return AppContent;
};

export default Bootstrap;
