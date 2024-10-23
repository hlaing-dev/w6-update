import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import  modelSlice  from "./slices/login/ModelSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    model : modelSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
