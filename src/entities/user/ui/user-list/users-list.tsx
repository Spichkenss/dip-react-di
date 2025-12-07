import type { User } from "../../model/user.types";
import { UserCard } from "../user-card/user-card";

interface UsersListProps {
  users: User[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul data-testid="users-list">
      {users.map(({ id, name }) => (
        <li key={id}>
          <UserCard name={name} />
        </li>
      ))}
    </ul>
  );
};
