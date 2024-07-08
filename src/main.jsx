import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true,
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "about",
        // element: <AboutPage />,
      },
      {
        path: "profile/:id",
        // element: <ProfilePage />,
      },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
