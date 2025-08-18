import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";


const useFaq = () => {

    //axios hook to fetch FAQ data
    const axios = usePublicAxios()

    const { data: faq_data, isLoading:faqLoading } = useQuery({
        queryKey: ['faq'],
        queryFn: async () => {
            const res = await axios.get('/faq');
            return res.data;
        },
        refetchOnWindowFocus: false,
        // staleTime: 1000 * 60 * 5, // 5 minutes

    })

    return [faq_data, faqLoading];
};

export default useFaq;