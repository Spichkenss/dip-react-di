import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiProvider } from "./shared/lib/di";
import { rootContainer } from "./app/modules/root.module.ts";
import App from "./app/App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiProvider container={rootContainer}>
      <App />
    </DiProvider>
  </StrictMode>
);
