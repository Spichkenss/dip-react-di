import { UserEntity } from "../../model/user.types";

interface UserCardProps {
  user: UserEntity;
  onRemove: (user: UserEntity) => void;
}

export const UserCard = ({ user, onRemove }: UserCardProps) => {
  const handleRemoveButtonClick = () => {
    onRemove(user);
  };

  return (
    <div style={{ display: "inline-flex", gap: 10 }}>
      <div>{user.name}</div>
      <button onClick={handleRemoveButtonClick}>Удалить</button>
    </div>
  );
};
