import { injectable } from "inversify";
import { axiosInstance } from "../../../shared/api/axios";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../shared/dto/user.dto";
import { IUserRepository } from "./user-repo.types";

@injectable()
export class UserProdApi implements IUserRepository {
  async getAll(): Promise<GetUsersResponseDTO> {
    const result = await axiosInstance.get<GetUsersResponseDTO>("/users");
    return result.data;
  }

  async remove(dto: RemoveUserRequestDTO): Promise<RemoveUserResponseDTO> {
    const result = await axiosInstance.delete<RemoveUserResponseDTO>(
      `/users/${dto.userId}`
    );

    return result.data;
  }
}
