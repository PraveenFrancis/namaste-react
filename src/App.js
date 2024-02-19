import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/ResaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const About = lazy(() => import("./components/About"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element:(
          <Suspense> <About /></Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
 
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
