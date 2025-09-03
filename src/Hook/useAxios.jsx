import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Create axios instance for private API calls
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials is not needed if using Authorization header
});

const useAxios = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    // Attach JWT token to every request
    instance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("accessToken"); // JWT stored after login
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Handle responses globally
    instance.interceptors.response.use(
        (response) => response, // Return response if successful
        async (error) => {
            if (error.response) {
                const status = error.response.status;

                // Handle unauthorized or forbidden
                if (status === 401 || status === 403) {
                    toast.error("Session expired. Logging out...");
                    try {
                        await logoutUser(); // Clear user and tokens
                    } catch (err) {
                        console.error("Logout failed:", err);
                    }
                    localStorage.removeItem("accessToken");
                    navigate("/login");
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default useAxios;
