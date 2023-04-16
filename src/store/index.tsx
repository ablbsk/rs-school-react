import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import search from "./search";

// ------------------------------------------------------

export const store = configureStore({
  reducer: { search },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
