import { ReactNode } from "react";
import { createDi } from "../../shared/lib/react";
import { UserEntity } from "../../entities/user/model/user.types";
import { Loadable } from "../../shared/api/api.types";

type UsersListDeps = {
  getUsers: () => Loadable<UserEntity[]>;
  renderUser: (user: UserEntity) => ReactNode;
};

export const { Injector: UsersListInjector, useDi: useUsersListDi } =
  createDi<UsersListDeps>();
