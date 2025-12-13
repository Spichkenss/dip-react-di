import { UserService } from "../../../../entities/user";
import { UserId } from "../../../../entities/user/model/user.types";
import { INJECTION_TOKENS, useInjection } from "../../../../shared/lib/di";
import { useRemoveUser } from "../lib/use-remove-user";

type RemoveButtonRenderParams = {
  removeUser: (userId: UserId) => Promise<boolean>;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

interface RemoveButtonEntryProps {
  render: (params: RemoveButtonRenderParams) => React.ReactNode;
}

export const RemoveButtonEntry = ({ render }: RemoveButtonEntryProps) => {
  const userService = useInjection<UserService>(INJECTION_TOKENS.USER_SERVICE);
  const params = useRemoveUser({ userService });

  return <>{render(params)}</>;
};
