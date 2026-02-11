import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCourses = () => {

    //public Axios call to fetch banner data
    const axios = useAxios()

    const { data: courses, isLoading,isFetching, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axios.get('/courses')
            return res.data;
        },
        

    })

    return [courses, isLoading, isFetching, refetch];
};

export default useCourses;