import { ContainerModule, ContainerModuleLoadOptions } from "inversify";

export const createContainerModule = (
  factory: (options: ContainerModuleLoadOptions) => void
) => {
  return new ContainerModule(factory);
};
