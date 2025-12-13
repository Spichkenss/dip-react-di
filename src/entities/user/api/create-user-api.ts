import { baseApi } from "../../../shared/api/base-api";
import { GetUsersResponseDTO } from "../../../shared/dto/user.dto";
import { UserService } from "../model/user.service";

export const createUserApi = (userSerivce: UserService) => {
  return baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      getUsers: build.query<GetUsersResponseDTO, void>({
        queryFn: async () => {
          try {
            const users = await userSerivce.getUsers();
            return { data: users };
          } catch (error) {
            return { error };
          }
        },
        providesTags: (result) =>
          result ? result.map(({ id }) => ({ type: "USERS", id })) : ["USERS"],
      }),
    }),
  });
};
