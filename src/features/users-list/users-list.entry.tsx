import { UsersListFeature } from "./users-list.component";

import { UsersListInjector } from "./users-list.injection";

import { UserEntity } from "../../entities/user/model/user.types";
import { UserCard } from "../../entities/user";
import { useUserModelDi } from "../../entities/user/di/user-model.injection";

export const UsersListEntry = () => {
  const userModelCtx = useUserModelDi();

  const { mutate: removeUser } = userModelCtx.removeUser();

  const onUserRemove = (user: UserEntity) => {
    removeUser(user.id);
  };

  return (
    <UsersListInjector
      value={{
        getUsers: userModelCtx.getUsers,
        renderUser: (user) => <UserCard user={user} onRemove={onUserRemove} />,
      }}
    >
      <UsersListFeature />
    </UsersListInjector>
  );
};
