import { INJECTION_TOKENS, useInjection } from "../../../../shared/lib/di";
import { useUsers } from "../../lib/use-users";
import { IUserRepository } from "../../model/user.types";
import { UsersList } from "./users-list";

export const UsersListEntry = () => {
  const userApi = useInjection<IUserRepository>(
    INJECTION_TOKENS.USER_REPOSITORY
  );
  const { users, isLoading } = useUsers({ userApi });

  if (isLoading) return <div>Загузка пользователей...</div>;
  if (!users.length) return <div>Список пользователей пуст</div>;

  return <UsersList users={users} />;
};
