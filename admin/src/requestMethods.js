import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const localStore = localStorage.getItem("persist:root");
const authUser = localStore ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser : null;
export const TOKEN = authUser !== null ? authUser.accessToken : "";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});