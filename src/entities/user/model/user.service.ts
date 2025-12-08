import { inject } from "inversify";
import { INJECTION_TOKENS } from "../../../shared/lib/di";
import { IUserRepository } from "./user.types";

export class UserService {
  constructor(
    @inject(INJECTION_TOKENS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  getUsers() {
    return this.userRepository.getAll();
  }

  removeUser(id: number) {
    return this.userRepository.remove(id);
  }
}
