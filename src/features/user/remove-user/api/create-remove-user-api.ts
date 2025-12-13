import { createUserApi, UserService } from "../../../../entities/user";
import { UserId } from "../../../../entities/user/model/user.types";
import {
  RemoveUserRequestDTO,
  RemoveUserResponseDTO,
} from "../../../../shared/dto/user.dto";

export const createRemoveUserApi = (userService: UserService) => {
  const userApi = createUserApi(userService);

  return userApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      removeUser: build.mutation<
        RemoveUserResponseDTO,
        RemoveUserRequestDTO<UserId>
      >({
        queryFn: async ({ userId }) => {
          try {
            const result = await userService.removeUser(userId);
            return { data: result };
          } catch (error) {
            return { error };
          }
        },
        invalidatesTags: (_r, _e, { userId }) => [
          { type: "USERS", id: userId },
        ],
      }),
    }),
  });
};
