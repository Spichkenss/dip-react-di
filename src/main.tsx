import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DiProvider } from "./shared/lib/di";
import { createContainer } from "./app/container.tsx";

const container = createContainer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiProvider container={container}>
      <App />
    </DiProvider>
  </StrictMode>
);
