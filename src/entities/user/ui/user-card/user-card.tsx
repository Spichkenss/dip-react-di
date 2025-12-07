interface UserCardProps {
  name: string;
}

export const UserCard = ({ name }: UserCardProps) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};
