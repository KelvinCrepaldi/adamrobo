import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import AccountsPage from '../pages/AccountsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/accounts',
    element: <AccountsPage />
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
