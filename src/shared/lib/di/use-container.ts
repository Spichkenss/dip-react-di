import type { Container } from "inversify";
import { useContext } from "react";
import { DiContext } from "./container.context";

export function useContainer(): Container {
  const ctx = useContext(DiContext);

  if (!ctx) throw new Error("useContaer hook must be used within DiProvider");

  return ctx;
}
