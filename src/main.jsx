import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/index.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Projects from "./pages/Projects/index.jsx";
import Weddings from "./pages/Weddings/index.jsx";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/wedding",
        element: <Weddings />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
