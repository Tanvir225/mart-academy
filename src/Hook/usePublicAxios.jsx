import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_PRIMARY_API_URL || "http://localhost:5173",
    withCredentials: true,
});

const usePublicAxios = () => {
    return instance;
};

export default usePublicAxios;