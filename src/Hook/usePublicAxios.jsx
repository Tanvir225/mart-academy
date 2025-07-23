import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5173",
    withCredentials: true,
});

const usePublicAxios = () => {
    return instance;
};

export default usePublicAxios;