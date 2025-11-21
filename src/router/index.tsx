import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import BookingPage from '../pages/BookingPage/BookingPage';
import ConfirmationPage from '../pages/ConfirmationPage/ConfirmationPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <BookingPage />,
      },
      {
        path: '/confirmation',
        element: <ConfirmationPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
