import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";


const useNotifications = () => {
    const axios = useAxios();
    const [userData] = useUser();

    const { data: notifications = [], refetch } =
        useQuery({
            queryKey: ["notifications"],
            queryFn: async () => {
                const res = await axios.get(
                    `/notifications/${userData?.email}`
                );
                return res.data;
            },
        });

    return [notifications, refetch];
};

export default useNotifications;
