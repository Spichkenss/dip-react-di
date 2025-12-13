import { UserEntity } from "../../model/user.types";

interface UsersListProps {
  users: UserEntity[];
  renderItem: (user: UserEntity) => React.ReactNode;
}

export const UsersList = ({ users, renderItem }: UsersListProps) => {
  return (
    <ul data-testid="users-list">
      {users.map((user) => (
        <li key={user.id}>{renderItem(user)}</li>
      ))}
    </ul>
  );
};
