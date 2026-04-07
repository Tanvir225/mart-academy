import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";



const useCourseInside = () => {

    //public Axios call to fetch banner data
    const axios = useAxios()

    const [userData] = useUser()

    const { data: batchDetails, isLoading,isFetching, refetch } = useQuery({
        queryKey: ['my-courses'],
        queryFn: async () => {
            const res = await axios.get(`/my-courses/${userData?.email}`)
            // console.log(res?.data);
            return res.data;
        },
        

    })

    return [batchDetails, isLoading, isFetching, refetch];
};

export default useCourseInside;