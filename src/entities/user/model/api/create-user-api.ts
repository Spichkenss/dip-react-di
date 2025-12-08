import { baseApi } from "../../../../shared/api/base-api";
import { UserService } from "../user.service";
import { User } from "../user.types";

export const createUserApi = (userSerivce: UserService) => {
  return baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      getUsers: build.query<User[], void>({
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
