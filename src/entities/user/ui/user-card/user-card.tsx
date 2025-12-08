interface UserCardProps {
  name: string;
  removeButtonSlot?: React.ReactNode;
}

export const UserCard = ({ name, removeButtonSlot }: UserCardProps) => {
  return (
    <div style={{ display: "inline-flex", gap: 10 }}>
      <div>{name}</div>
      <div>{removeButtonSlot}</div>
    </div>
  );
};
