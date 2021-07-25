import axios from "axios";

const api = axios.create({
    baseURL: "https://kenziehub.me/",
});

api.interceptors.request.use(async config => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));;

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
});


export default api;