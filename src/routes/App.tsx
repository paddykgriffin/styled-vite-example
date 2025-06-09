import { AppRoutes } from './AppRoutes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const allRoutes = useRoutes([...AppRoutes()]);
  return allRoutes;
};

export default App;
