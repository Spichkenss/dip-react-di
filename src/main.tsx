import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiProvider } from "./shared/lib/di";
import { rootContainer } from "./app/modules/root.module.ts";
import "./index.css";
import App from "./app/app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiProvider container={rootContainer}>
      <App />
    </DiProvider>
  </StrictMode>
);
