import { useCallback, useMemo } from "react";
import { createRemoveUserApi } from "../api/create-remove-user-api";
import { UserService } from "../../../../entities/user";
import { UserId } from "../../../../entities/user/model/user.types";

interface UseRemoveUserParams {
  userService: UserService;
}

interface UseRemoveUserReturn {
  removeUser: (userId: UserId) => Promise<boolean>;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

export const useRemoveUser = ({
  userService,
}: UseRemoveUserParams): UseRemoveUserReturn => {
  const api = useMemo(() => createRemoveUserApi(userService), [userService]);

  const [removeUserMutation, { isLoading, isError, error }] =
    api.useRemoveUserMutation();

  const removeUser = useCallback(
    async (userId: UserId): Promise<boolean> => {
      return await removeUserMutation({ userId }).unwrap();
    },
    [removeUserMutation]
  );

  return {
    removeUser,
    isLoading,
    isError,
    error: error as string | null,
  };
};
