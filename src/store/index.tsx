import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import search from "./search";
import feedback from "./feedback";

// ------------------------------------------------------

export const store = configureStore({
  reducer: { search, feedback },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
