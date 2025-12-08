import { useMemo } from "react";
import { useContainer } from "./use-container";
import { GetOptions, ServiceIdentifier } from "inversify";

export function useInjection<T>(
  identifier: ServiceIdentifier<T>,
  options?: GetOptions
): T {
  const container = useContainer();
  return useMemo(
    () => container.get<T>(identifier, options),
    [container, identifier, options]
  );
}
