import { publicRequest, userRequest } from "../requestMethods";
import {
    loginFailure, loginStart, loginSuccess,
    userLogout,
} from "./userRedux";
import {
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    addProductStart, addProductSuccess, addProductFailure
} from "./productRedux";

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
        window.location.replace("/");
    } catch { }
};

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};
export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(res.data));
        window.location.replace("/products");
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};
export const updateProduct = async (dispatch, product, id) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/products/${id}`, product);
        dispatch(updateProductSuccess(res.data));
        window.location.replace("/products");
    } catch (err) {
        dispatch(updateProductFailure());
    }
};
export const addProduct = async (dispatch, product) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post("/products", product);
        dispatch(addProductSuccess(res.data));
        window.location.replace("/products");
    } catch (err) {
        dispatch(addProductFailure());
    }
};