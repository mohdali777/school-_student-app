// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import AuthStudent from "./Slice/Auth";

const store = configureStore({
  reducer: {
    StudentAuth: AuthStudent,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for AsyncStorage + Axios data
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
