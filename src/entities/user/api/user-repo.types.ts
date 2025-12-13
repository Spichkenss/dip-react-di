import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../shared/dto/user.dto";

export interface IUserRepository {
  getAll(): Promise<GetUsersResponseDTO>;
  remove(dto: RemoveUserRequestDTO): Promise<RemoveUserResponseDTO>;
}
