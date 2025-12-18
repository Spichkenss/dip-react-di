import { inject } from "inversify";
import { INJECTION_TOKENS } from "../../shared/lib/di";
import { IUserRepository } from "./api/user-repo.types";
import { createUserQueries } from "./api/user.queries";
import { Loadable, Mutation } from "../../shared/api/api.types";
import { UserEntity, UserId } from "./model/user.types";
import { UserAdapter } from "./model/user.adapter";

export class UserService {
  private readonly userQueries;

  constructor(
    @inject(INJECTION_TOKENS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {
    this.userQueries = createUserQueries(this.userRepository);
  }

  getUsers = (): Loadable<UserEntity[]> => {
    const {
      data: users,
      isLoading,
      isError,
    } = this.userQueries.useGetUsersQuery();

    return {
      data: users?.map(UserAdapter.toEntity),
      isLoading,
      isError,
    };
  };

  removeUser = (): Mutation<UserId, boolean> => {
    const [removeUserMutation, { isLoading, isError, data }] =
      this.userQueries.useRemoveUserMutation();

    return {
      mutate: (userId) => removeUserMutation({ userId }).unwrap(),
      isLoading,
      isError,
      data,
    };
  };
}
