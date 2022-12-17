import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import Projects from '../screens/Projects';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Path from './paths';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to={Path.Projects} />,
        },
        {
          path: '*',
          element: <Navigate to={Path.Projects} />,
        },
        {
          path: Path.Projects,
          element: <Projects />,
        },

        {
          path: Path.Page2,
          element: <Page2 />,
        },
        {
          path: Path.Page3,
          element: <Page3 />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
