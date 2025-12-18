import { injectable } from "inversify";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../shared/dto/user.dto";
import { IUserRepository } from "./user-repo.types";
import { APIResponse, httpClient } from "../../../shared/api/httpClient";

@injectable()
export class UserProdApi implements IUserRepository {
  getAll(): APIResponse<GetUsersResponseDTO> {
    return httpClient.get<GetUsersResponseDTO>("/users");
  }

  remove({ userId }: RemoveUserRequestDTO): APIResponse<RemoveUserResponseDTO> {
    return httpClient.delete<RemoveUserResponseDTO>(`/users/${userId}`);
  }
}
