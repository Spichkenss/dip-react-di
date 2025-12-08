import { Provider } from "react-redux";
import { createStore } from "./store";

const store = createStore();

export const StoreProvider = () => {
  return <Provider store={store}></Provider>;
};
