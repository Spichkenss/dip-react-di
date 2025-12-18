import { APIResponse } from "../../../shared/api/httpClient";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../shared/dto/user.dto";

export interface IUserRepository {
  getAll(): APIResponse<GetUsersResponseDTO>;
  remove(dto: RemoveUserRequestDTO): APIResponse<RemoveUserResponseDTO>;
}
