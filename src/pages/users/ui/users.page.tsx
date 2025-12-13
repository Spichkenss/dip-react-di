import { UserCard, UsersListEntry } from "../../../entities/user";
import { RemoveButtonEntry } from "../../../features/user/remove-user";

const UsersPage = () => {
  return (
    <div>
      <UsersListEntry
        renderItem={(user) => (
          <UserCard
            user={user}
            removeButtonSlot={
              <RemoveButtonEntry
                render={({ removeUser }) => (
                  <button onClick={() => removeUser(user.id)}>Удалить</button>
                )}
              />
            }
          />
        )}
      />
    </div>
  );
};

export default UsersPage;
