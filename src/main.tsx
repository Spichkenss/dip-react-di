import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DiProvider } from "./shared/lib/di";
import { rootContainer } from "./app/modules/root.module.ts";
import "./index.css";
import App from "./app/app.tsx";
import { createStore } from "./app/store/store.ts";
import { Provider } from "react-redux";

const store = createStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiProvider container={rootContainer}>
      <Provider store={store}>
        <App />
      </Provider>
    </DiProvider>
  </StrictMode>
);
