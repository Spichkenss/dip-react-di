import { RouterProvider } from "react-router";
import { createRouter } from "./app/routing/app-router";
import "./App.css";

const router = createRouter();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
