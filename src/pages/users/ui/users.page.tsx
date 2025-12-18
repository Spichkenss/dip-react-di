import { UserModelInjector } from "../../../entities/user/di/user-model.injection";
import { UserModel } from "../../../entities/user/model/user.model";
import { UsersListEntry } from "../../../features/users-list";
import { INJECTION_TOKENS, useInjection } from "../../../shared/lib/di";

const UsersPage = () => {
  const userModel = useInjection<UserModel>(INJECTION_TOKENS.USER_MODEL);

  return (
    <div>
      <h2>Все пользователи</h2>
      <UserModelInjector
        value={{
          getUsers: userModel.getAllUsers,
          removeUser: userModel.removeUser,
        }}
      >
        <UsersListEntry />
      </UserModelInjector>
      <hr />
      <h2>Админы</h2>
      <UserModelInjector
        value={{
          getUsers: userModel.getAdmins,
          removeUser: userModel.removeUser,
        }}
      >
        <UsersListEntry />
      </UserModelInjector>
    </div>
  );
};

export default UsersPage;
