import { useEffect, useState } from "react";
import { IUserRepository, User } from "../model/user.types";

interface UseUsersParams {
  userApi: IUserRepository;
}

export const useUsers = ({ userApi }: UseUsersParams) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const request = async () => {
      setIsLoading(true);
      try {
        const users = await userApi.getUsers();
        setUsers(users);
      } catch (e) {
        setError(JSON.stringify(e));
      } finally {
        setIsLoading(false);
      }
    };

    request();
  }, [userApi]);

  return { users, error, isError: !!error, isLoading };
};
