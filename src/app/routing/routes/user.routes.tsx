import { Outlet, RouteObject } from "react-router";
import { DiProvider } from "../../../shared/lib/di";
import { userContainer } from "../../modules/user.module";
import { UsersPageLazy } from "../../../pages/users";

export const userRoutes: RouteObject = {
  path: "users",
  element: (
    <DiProvider container={userContainer}>
      <Outlet />
    </DiProvider>
  ),
  children: [{ index: true, element: <UsersPageLazy /> }],
};
