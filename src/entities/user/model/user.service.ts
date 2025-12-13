import { inject } from "inversify";
import { INJECTION_TOKENS } from "../../../shared/lib/di";
import { UserId } from "./user.types";
import { IUserRepository } from "../api/user-repo.types";

export class UserService {
  constructor(
    @inject(INJECTION_TOKENS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  getUsers() {
    return this.userRepository.getAll();
  }

  removeUser(userId: UserId) {
    return this.userRepository.remove({ userId });
  }
}
