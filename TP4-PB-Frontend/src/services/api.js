import axios from "axios";

const api = axios.create({
    baseURL: "https://tp5-pb-production.up.railway.app/"
});

export default api;