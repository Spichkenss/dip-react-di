import type { Container } from "inversify";
import { createContext } from "react";

export const DiContext = createContext<Container | null>(null);
