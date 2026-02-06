import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";



const useAllUser = () => {

    //public Axios call to fetch banner data
    const axios = usePublicAxios()

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/users')
            return res.data;
        }
    })

    return [users, isLoading, refetch];
};

export default useAllUser;