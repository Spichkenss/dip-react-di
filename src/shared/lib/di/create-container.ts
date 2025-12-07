import { Container, ContainerOptions } from "inversify";

export const createContainer = (
  factory: (container: Container) => void,
  options?: ContainerOptions
) => {
  const container = new Container(options);
  factory(container);
  return container;
};
