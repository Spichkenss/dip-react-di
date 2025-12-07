import { createBrowserRouter } from "react-router";
import { AppLayout } from "../layouts/app-layout";
import { userRoutes } from "./routes/user.routes";

export const setupRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [userRoutes],
    },
  ]);
};
