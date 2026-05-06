import React, { useState } from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useBatches = () => {
    //public Axios call to fetch banner data
    const axios = useAxios()
    const [searchQuery, setSearchQuery] = useState("");
    

    const { data: batches, isLoading, refetch } = useQuery({
        queryKey: ['batches', searchQuery],
        queryFn: async () => {
            const res = await axios.get(`/batches?courseName=${searchQuery}`)
            return res.data;
        }
    })

    return [batches, isLoading, setSearchQuery, refetch];
};

export default useBatches;