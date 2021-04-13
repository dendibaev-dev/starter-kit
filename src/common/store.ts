import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { currentLocaleReducer } from "../features/currentLocale";

const store = configureStore({
  reducer: {
    currentLocale: currentLocaleReducer,
    auth: authReducer,
  },
});

export type State = ReturnType<typeof store.getState>;

export default store;
