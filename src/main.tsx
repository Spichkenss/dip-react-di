import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DiProvider } from "./shared/lib/di";
import { rootContainer } from "./app/modules/root.module.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiProvider container={rootContainer}>
      <App />
    </DiProvider>
  </StrictMode>
);
