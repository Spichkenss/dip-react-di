import { UsersList } from "../../entities/user/ui/user-list/users-list";
import { AsyncWrapper } from "../../shared/components/async-wrapper";

import { useUsersListDi } from "./users-list.injection";

export const UsersListFeature = () => {
  const { renderUser, getUsers } = useUsersListDi();

  const { data: users, isError, isLoading } = getUsers();

  return (
    <AsyncWrapper data={users} isError={isError} isLoading={isLoading}>
      {(users) =>
        users.length > 0 ? (
          <UsersList users={users} renderUser={renderUser} />
        ) : (
          "Нету пользователей"
        )
      }
    </AsyncWrapper>
  );
};
