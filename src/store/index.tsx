import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import main from "./main";
import feedback from "./feedback";

// ------------------------------------------------------

export const store = configureStore({
  reducer: { main, feedback },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
