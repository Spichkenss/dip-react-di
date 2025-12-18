import { inject } from "inversify";
import { UserService } from "../user.service";
import { UserEntity, UserId, UserRole } from "./user.types";
import { Loadable, Mutation } from "../../../shared/api/api.types";
import { INJECTION_TOKENS } from "../../../shared/lib/di";

export class UserModel {
  constructor(
    @inject(INJECTION_TOKENS.USER_SERVICE)
    private readonly userService: UserService
  ) {}

  getAllUsers = (): Loadable<UserEntity[]> => {
    const { data, isError, isLoading } = this.userService.getUsers();

    return { data, isError, isLoading };
  };

  getAdmins = (): Loadable<UserEntity[]> => {
    const { data, isError, isLoading } = this.userService.getUsers();

    return {
      isError,
      isLoading,
      data: data?.filter((user) => user.role === UserRole.ADMIN),
    };
  };

  removeUser = (): Mutation<UserId, boolean> => {
    const { data, isError, isLoading, mutate } = this.userService.removeUser();

    return {
      data,
      isError,
      isLoading,
      mutate,
    };
  };
}
