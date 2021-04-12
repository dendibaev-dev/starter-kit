import { configureStore } from "@reduxjs/toolkit";
import { currentLocaleReducer } from "../features/currentLocale";
import { testReducer } from "../features/test";

const store = configureStore({
  reducer: {
    currentLocale: currentLocaleReducer,
    test: testReducer,
  },
});

export type State = ReturnType<typeof store.getState>;

export default store;
