import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, Root } from "./routes";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root /> ,
      errorElement: <ErrorPage />,
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
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  )
}