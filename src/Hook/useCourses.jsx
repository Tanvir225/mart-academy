import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";


const useCourses = () => {

    //public Axios call to fetch banner data
    const axios = usePublicAxios()

    const { data: courses, isLoading, refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axios.get('/courses')
            return res.data;
        }
    })

    return [courses, isLoading, refetch];
};

export default useCourses;