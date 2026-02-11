import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useNotifications = () => {
    const axios = useAxios();

    const { data: notifications = [], refetch } =
        useQuery({
            queryKey: ["notifications"],
            queryFn: async () => {
                const res = await axios.get(
                    "/notifications"
                );
                return res.data;
            },
        });

    return [notifications, refetch];
};

export default useNotifications;
