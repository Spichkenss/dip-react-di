import { injectable } from "inversify";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
  UserDTO,
} from "../../../shared/dto/user.dto";
import { IUserRepository } from "./user-repo.types";

@injectable()
export class UserMockApi implements IUserRepository {
  private users: UserDTO[] = [
    {
      id: "1",
      name: "sasha",
      surname: "blinov",
      email: "webjaba@mail.ru",
      role: "admin",
      birthDate: "2002-04-01",
    },
  ];

  async getAll(): Promise<GetUsersResponseDTO> {
    return this.users;
  }

  remove(dto: RemoveUserRequestDTO): Promise<RemoveUserResponseDTO> {
    let deleted = false;
    const index = this.users.findIndex((user) => user.id === dto.userId);

    if (index !== -1) {
      this.users.splice(index, 1);
      deleted = true;
    }

    return Promise.resolve(deleted);
  }
}
