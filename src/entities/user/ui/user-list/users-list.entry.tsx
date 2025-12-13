import { INJECTION_TOKENS, useInjection } from "../../../../shared/lib/di";
import { useUsers } from "../../lib/use-users";
import { UserService } from "../../model/user.service";
import { UserEntity } from "../../model/user.types";
import { UsersList } from "./users-list";

interface UsersListEntryProps {
  renderItem: (user: UserEntity) => React.ReactNode;
}

export const UsersListEntry = ({ renderItem }: UsersListEntryProps) => {
  const userService = useInjection<UserService>(INJECTION_TOKENS.USER_SERVICE);
  const { users, isLoading } = useUsers({ service: userService });

  if (isLoading) return <div>Загузка пользователей...</div>;
  if (!users.length) return <div>Список пользователей пуст</div>;

  return <UsersList users={users} renderItem={renderItem} />;
};
