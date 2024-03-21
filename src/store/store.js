import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/pokemonApi";

const myLog = (store) => (next) => (action) => {
  const res = next(action);
  return res;
};

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myLog, pokemonApi.middleware),
});
