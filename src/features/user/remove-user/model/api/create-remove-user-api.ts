import { createUserApi, UserService } from "../../../../../entities/user";

export const createRemoveUserApi = (userService: UserService) => {
  const userApi = createUserApi(userService);

  return userApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
      removeUser: build.mutation<boolean, number>({
        queryFn: async (id: number) => {
          try {
            const result = await userService.removeUser(id);
            return { data: result };
          } catch (error) {
            return { error };
          }
        },
        invalidatesTags: (_r, _e, id) => [{ type: "USERS", id }],
      }),
    }),
  });
};
