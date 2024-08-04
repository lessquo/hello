import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Login } from '../routes/Login';
import { Root } from '../routes/Root';

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/login', Component: Login },
    ],
  },
]);
