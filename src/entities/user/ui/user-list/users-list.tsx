import { UserEntity } from "../../model/user.types";

interface UsersListProps {
  users: UserEntity[];
  renderUser: (user: UserEntity) => React.ReactNode;
}

export const UsersList = ({ users, renderUser }: UsersListProps) => {
  return (
    <ul data-testid="users-list">
      {users.map((user) => (
        <li key={user.id}>{renderUser(user)}</li>
      ))}
    </ul>
  );
};
