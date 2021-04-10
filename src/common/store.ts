import { configureStore } from "@reduxjs/toolkit";
import { currentLocaleReducer } from "../features/currentLocale";
import { testReducer } from "../features/test";

export default configureStore({
  reducer: {
    currentLocale: currentLocaleReducer,
    test: testReducer,
  },
});
