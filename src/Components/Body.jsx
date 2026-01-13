import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./src/components/Login";
import Browse from "./src/components/Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
