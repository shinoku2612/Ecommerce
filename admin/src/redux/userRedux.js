import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        bDate: "01/01/2000",
        gender: "Male",
        phone: "0312645879"
    },
    reducers: {
        refresh: (state) => {
            state.error = false;
        },
        registerStart: (state) => {
            state.isFetching = true;
            state.error = false;
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
            state.error = false;
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
        },
        updateStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;

            state.bDate = action.payload.date;
            state.gender = action.payload.gend;
            state.phone = action.payload.phone;
        },
        updateFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const {
    registerStart, registerSuccess, registerFailure,
    loginStart, loginSuccess, loginFailure,
    userLogout, refresh,
    updateStart, updateSuccess, updateFailure
} = userSlice.actions;
export default userSlice.reducer;