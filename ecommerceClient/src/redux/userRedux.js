import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        userLogout: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        }
    }
});

export const {
    registerStart, registerSuccess, registerFailure,
    loginStart, loginSuccess, loginFailure,
    userLogout
} = userSlice.actions;
export default userSlice.reducer;