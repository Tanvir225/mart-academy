import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const useAdmin = () => {
    const axios = useAxios();       // Private axios instance with JWT
    const { user, loading } = useAuth();  // Auth context

    // React Query to check if user is admin
    const { data: isAdmin = false, isLoading, error } = useQuery({
        queryKey: ["admin", user?.email],
        queryFn: async () => {
            if (!user?.email) return false;

            try {
                const response = await axios.get(`/admin/${user.email}`);
                return response.data?.isAdmin || false;
            } catch (err) {
                console.error("Admin check failed:", err);
                toast.error("Failed to check admin status");
                return false;
            }
        },
        enabled: !!user && !loading, // Run query only if user exists and loading is false
        staleTime: 5 * 60 * 1000,   // Cache result for 5 minutes
    });

    return { isAdmin, isLoading, error };
};

export default useAdmin;
