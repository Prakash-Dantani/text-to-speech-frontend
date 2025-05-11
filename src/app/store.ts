import { configureStore } from "@reduxjs/toolkit";
import voiceSlice from "./voiceSlice";

const store = configureStore({
  reducer: {
    voice: voiceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
