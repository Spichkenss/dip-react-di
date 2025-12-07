import type { Container } from "inversify";
import { DiContext } from "./container.context";

export const DiProvider = ({
  children,
  container,
}: {
  children: React.ReactNode;
  container: Container;
}) => {
  return <DiContext.Provider value={container}>{children}</DiContext.Provider>;
};
