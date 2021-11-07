import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODRmYjIyYTlkMTNmMTkyYjU4MGYyNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjE3MzM4MCwiZXhwIjoxNjM2NDMyNTgwfQ.F9VWOIesfHjsa-F-mfB9e2exhxS_HX460cJs-OZL504";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});