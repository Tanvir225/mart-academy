import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Base URL for the API
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

const usePublicAxios = () => {
    return instance;
};

export default usePublicAxios;