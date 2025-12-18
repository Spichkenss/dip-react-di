import { UserService } from "../../entities/user";
import { UserMockApi } from "../../entities/user/api/user-api.mock";
import { UserModel } from "../../entities/user/model/user.model";

import { INJECTION_TOKENS } from "../../shared/lib/di";
import { createContainer } from "../../shared/lib/di/create-container";
import { createContainerModule } from "../../shared/lib/di/create-container-module";
import { rootContainer } from "./root.module";

const userModule = createContainerModule((options) => {
  options
    .bind(INJECTION_TOKENS.USER_SERVICE)
    .to(UserService)
    .inSingletonScope();

  options
    .bind(INJECTION_TOKENS.USER_REPOSITORY)
    .to(UserMockApi)
    .inSingletonScope();

  options.bind(INJECTION_TOKENS.USER_MODEL).to(UserModel).inSingletonScope();
});

export const userContainer = createContainer(
  (container) => {
    container.load(userModule);
  },
  { parent: rootContainer }
);
