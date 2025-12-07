import { createContainer } from "../../shared/lib/di/create-container";
import { createContainerModule } from "../../shared/lib/di/create-container-module";

const rootModule = createContainerModule((options) => {
  // Здесь можно регистрировать глобальные зависимости
});

export const rootContainer = createContainer((container) => {
  container.load(rootModule);
});
