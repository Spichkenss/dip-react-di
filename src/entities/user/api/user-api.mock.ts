import { injectable } from "inversify";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
  UserDTO,
} from "../../../shared/dto/user.dto";
import { IUserRepository } from "./user-repo.types";
import { APIResponse } from "../../../shared/api/httpClient";
import { UserRole } from "../model/user.types";

@injectable()
export class UserMockApi implements IUserRepository {
  private users: UserDTO[] = [
    {
      id: "1",
      name: "sasha",
      surname: "blinov",
      email: "webjaba@mail.ru",
      role: UserRole.ADMIN,
      birthDate: "2002-04-01",
    },
    {
      id: "2",
      name: "alexey",
      surname: "rojkov",
      email: "rojkov@mail.ru",
      role: UserRole.GUEST,
      birthDate: "2002-04-01",
    },
    {
      id: "3",
      name: "timofey",
      surname: "ulezko",
      email: "ulezko@mail.ru",
      role: UserRole.GUEST,
      birthDate: "2002-04-01",
    },
  ];

  async getAll(): APIResponse<GetUsersResponseDTO> {
    return {
      data: this.users,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {} as any,
    };
  }

  remove({ userId }: RemoveUserRequestDTO): APIResponse<RemoveUserResponseDTO> {
    const cachedLen = this.users.length;
    this.users = this.users.filter((user) => user.id !== userId);

    return {
      data: this.users.length === cachedLen,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {} as any,
    };
  }
}
