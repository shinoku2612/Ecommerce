import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const authUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
const TOKEN = authUser !== null ? authUser.accessToken : "";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});