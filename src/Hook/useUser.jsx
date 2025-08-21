import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useUser = () => {

    //useAuth hook to manage user authentication
    const { user } = useAuth();

    //private axios instance for user-related requests
    const axios = useAxios();

    //usequery to fetch user data
    const { data: userData, isLoading, refetch } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`/users?email=${user.email}`);
                return res.data;
            }
            return null;
        },
        enabled: !!user?.email // Only run the query if user email is available
    });

    return [userData, isLoading, refetch]
};

export default useUser;