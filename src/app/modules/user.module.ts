import { UserProdApi } from "../../entities/user/model/api/user-api.prod";
import { INJECTION_TOKENS } from "../../shared/lib/di";
import { createContainer } from "../../shared/lib/di/create-container";
import { createContainerModule } from "../../shared/lib/di/create-container-module";
import { rootContainer } from "./root.module";

const userModule = createContainerModule((options) => {
  options
    .bind(INJECTION_TOKENS.USER_REPOSITORY)
    .to(UserProdApi)
    .inSingletonScope();
});

export const userContainer = createContainer(
  (container) => {
    container.load(userModule);
  },
  { parent: rootContainer }
);
