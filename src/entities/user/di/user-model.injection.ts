import { UserEntity, UserId } from "../model/user.types";
import { Loadable, Mutation } from "../../../shared/api/api.types";
import { createDi } from "../../../shared/lib/react";

type UsersListDeps = {
  getUsers: () => Loadable<UserEntity[]>;
  removeUser: () => Mutation<UserId, boolean>;
};

export const { Injector: UserModelInjector, useDi: useUserModelDi } =
  createDi<UsersListDeps>();
