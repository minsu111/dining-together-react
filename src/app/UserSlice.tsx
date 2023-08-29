import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
    userId: string;
    userType: string;
    userEmail: string;
    userName: string;
    userPhoneNum: string;
};

const initialState: UserState = {
    userId: '',
    userType: '',
    userEmail: '',
    userName: '',
    userPhoneNum: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            return {
                ...state,
                userId: action.payload.userId,
                userType: action.payload.userType,
                userEmail: action.payload.userEmail,
                userName: action.payload.userName,
                userPhoneNum: action.payload.userPhoneNum,
            };
        },
        logout: () => initialState,
    },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
