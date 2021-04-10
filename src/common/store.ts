import { configureStore } from '@reduxjs/toolkit'
import { currentLocaleReducer } from '../features/currentLocale'


export default configureStore({
  reducer: {
    currnetLocale: currentLocaleReducer
  },
})