import { baseApi } from "../../../shared/api/base-api";
import {
  GetUsersResponseDTO,
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../shared/dto/user.dto";
import { IUserRepository } from "./user-repo.types";

export const createUserQueries = (userRepo: IUserRepository) =>
  baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      getUsers: build.query<GetUsersResponseDTO, void>({
        queryFn: () => userRepo.getAll(),
        providesTags: (result) =>
          result ? result.map(({ id }) => ({ type: "USERS", id })) : ["USERS"],
      }),
      removeUser: build.mutation<RemoveUserResponseDTO, RemoveUserRequestDTO>({
        queryFn: ({ userId }) => userRepo.remove({ userId }),
        invalidatesTags: (_r, _e, { userId }) => [
          { type: "USERS", id: userId },
        ],
      }),
    }),
  });
