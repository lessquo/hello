import { createBrowserRouter } from 'react-router-dom';
import { Home } from 'src/routes/Home';
import { Root } from 'src/routes/Root';
import { SignIn } from 'src/routes/SignIn';

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/sign-in', Component: SignIn },
    ],
  },
]);
