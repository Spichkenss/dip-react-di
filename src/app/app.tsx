import { RouterProvider } from "react-router";
import { setupRouter } from "./routing/setup-router";
import "./app.css";

const router = setupRouter();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
