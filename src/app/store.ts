import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterSlice from '../pages/search/store/FilterSlice';

export const store = configureStore({
    reducer: { filter: filterSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
