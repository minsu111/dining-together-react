/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import filterSlice from '../pages/search/store/FilterSlice';
import { userSlice } from './UserSlice';

// export const store = configureStore({
//     reducer: {
//         user: userSlice.reducer,
//     },
// });

const reducers = combineReducers({
    user: userSlice.reducer,
    filter: filterSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
