import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Root } from '../routes/Root';
import { SignIn } from '../routes/Signin';

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/sign-in', Component: SignIn },
    ],
  },
]);
