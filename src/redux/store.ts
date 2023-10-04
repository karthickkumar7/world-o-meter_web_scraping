import { configureStore } from '@reduxjs/toolkit';
import util from '@/redux/utilSlice';

export const store = configureStore({
    reducer: {
        util,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
