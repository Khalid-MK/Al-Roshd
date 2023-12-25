import { configureStore } from "@reduxjs/toolkit";
import DirectionSlice from "./features/DirectionSlice";

const store = configureStore({
  reducer: {
    direction: DirectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
