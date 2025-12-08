import { useMemo } from "react";
import { createUserApi } from "../model/api/create-user-api";
import { UserService } from "../model/user.service";
import { User } from "../model/user.types";

interface UseUsersParams {
  service: UserService;
}

interface UseUsersReturn {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

export const useUsers = ({ service }: UseUsersParams): UseUsersReturn => {
  const api = useMemo(() => createUserApi(service), [service]);

  const {
    data: users = [],
    error,
    isError,
    isLoading,
  } = api.useGetUsersQuery();

  return {
    users,
    error: error as string | null,
    isError,
    isLoading,
  };
};
