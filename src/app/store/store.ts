import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/base-api";
import { StoreSchema } from "./store.types";

export const createStore = (initialState?: StoreSchema) => {
  const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
  };

  return configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;

export type AppStore = ReturnType<typeof createStore>;
