import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL, // Base URL for the API
    withCredentials: true,
});

const usePublicAxios = () => {
    return instance;
};

export default usePublicAxios;