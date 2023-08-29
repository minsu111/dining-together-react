import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userSlice } from './UserSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
