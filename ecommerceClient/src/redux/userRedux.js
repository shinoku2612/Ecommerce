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
        },
        updateStart: (state) => {
            state.isFetching = true;
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
    userLogout,
    updateStart, updateSuccess, updateFailure
} = userSlice.actions;
export default userSlice.reducer;