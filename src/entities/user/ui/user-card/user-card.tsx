import { UserEntity } from "../../model/user.types";

interface UserCardProps {
  user: UserEntity;
  removeButtonSlot?: React.ReactNode;
}

export const UserCard = ({ user, removeButtonSlot }: UserCardProps) => {
  const { name } = user;

  return (
    <div style={{ display: "inline-flex", gap: 10 }}>
      <div>{name}</div>
      {removeButtonSlot}
    </div>
  );
};
