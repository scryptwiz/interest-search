import { configureStore } from '@reduxjs/toolkit';
import interestReducer from './slice/interestSlice';

export const reduxStore = configureStore({
  reducer: {
    interest: interestReducer,
  },
});

export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
