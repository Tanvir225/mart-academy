import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useNotifications = () => {
    const axios = useAxios();
    const {user} = useAuth();

    const { data: notifications = [], refetch } =
        useQuery({
            queryKey: ["notifications"],
            queryFn: async () => {
                const res = await axios.get(
                    `/notifications/${user?.email}`
                );
                return res.data;
            },
        });

    return [notifications, refetch];
};

export default useNotifications;
