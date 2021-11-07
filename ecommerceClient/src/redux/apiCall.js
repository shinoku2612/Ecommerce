import { publicRequest } from "../requestMethods";
import {
    registerFailure, registerStart, registerSuccess,
    loginFailure, loginStart, loginSuccess,
    userLogout
} from "./userRedux"

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
        window.location.replace("/login");
    } catch (err) {
        dispatch(registerFailure());
    }
};
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
export const logout = async (dispatch) => {
    try {
        await dispatch(userLogout());
        window.location.reload();
    } catch { }
};