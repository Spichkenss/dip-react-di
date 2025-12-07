import { useMemo } from "react";
import { useContainer } from "./use-container";

export function useInjection<T>(identifier: symbol): T {
  const container = useContainer();
  return useMemo(() => container.get<T>(identifier), [container, identifier]);
}
