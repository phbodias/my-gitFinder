import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Search from "./pages/Search/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
