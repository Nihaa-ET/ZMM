import { configureStore } from '@reduxjs/toolkit'
import sellerReducer from './sellerSlice'

export const store = configureStore({
  reducer: {
    seller : sellerReducer
  },
})