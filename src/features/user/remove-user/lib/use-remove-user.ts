import { useMemo } from "react";
import { createRemoveUserApi } from "../model/api/create-remove-user-api";
import { UserService } from "../../../../entities/user";

interface UseRemoveUserParams {
  userService: UserService;
}

interface UseRemoveUserReturn {
  removeUser: (id: number) => Promise<boolean>;
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

  const removeUser = async (id: number): Promise<boolean> => {
    return await removeUserMutation(id).unwrap();
  };

  return {
    removeUser,
    isLoading,
    isError,
    error: error as string | null,
  };
};
