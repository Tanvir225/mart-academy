import { useQuery } from "@tanstack/react-query";

import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useAdmin = () => {
    //axios api call to check admin
    const axios = useAxios();
    const { user, loading } = useAuth();

    //ten-stack query
    const { data: isAdmin, isPending } = useQuery({
        enabled: !!user && !loading,
        queryKey: ["admin", user?.email],
        queryFn: async () => {
            const result = await axios.get(`admin/${user?.email}`, {
                withCredentials: true, // 👈 ensure cookies are sent
            });
            return result?.data?.isAdmin;
        },
    });

    return [isAdmin, isPending];
};

export default useAdmin;