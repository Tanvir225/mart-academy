import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";


const useBanner = () => {

    //public Axios call to fetch banner data
    const axios = usePublicAxios()

    const { data: banner_data, isLoading, refetch } = useQuery({
        queryKey: ['banner'],
        queryFn: async () => {
            const res = await axios.get('/banner')
            return res.data;
        }
    })

    return [banner_data, isLoading, refetch];
};

export default useBanner;