import { Container } from "inversify";
import { INJECTION_TOKENS } from "../shared/lib/di";
import { UserProdApi } from "../entities/user/model/api/user-api.prod";

export const createContainer = () => {
  const container = new Container();

  container.bind(INJECTION_TOKENS.USER_API).to(UserProdApi).inSingletonScope();

  return container;
};
