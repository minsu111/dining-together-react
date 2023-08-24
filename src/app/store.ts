import {
    configureStore,
    createSlice,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

// 라디오 버튼 선택 상태를 관리할 리듀서 생성
const radioSlice = createSlice({
    name: 'radio',
    initialState: '',
    reducers: {
        setSelectedOption: (state, action) => action.payload,
    },
});

export const { setSelectedOption } = radioSlice.actions;

// 스토어 생성
export const store = configureStore({
    reducer: {
        radio: radioSlice.reducer,
    },
});

// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
