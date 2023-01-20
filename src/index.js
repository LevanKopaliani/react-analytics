import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

const Applayout = () => {
  return (
    <>
      <Home />
      <Features />
      <Pricing />
      {/* <Outlet /> */}
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: "/react-analytics/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
