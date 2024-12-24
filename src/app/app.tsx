import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage, Root, WeatherRoute } from './routes';
import { ConfigProvider } from 'antd';
import { appTheme } from './styles/appTheme';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'location',
          element: <div>Empty locations list</div>,
        },
        {
          path: 'location/:locationId',
          element: <WeatherRoute />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
export function App() {
  return (
    <ConfigProvider theme={appTheme}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ConfigProvider>
  );
}
