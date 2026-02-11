import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";



const useAllUser = () => {

    //public Axios call to fetch banner data
    const axios = useAxios()

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