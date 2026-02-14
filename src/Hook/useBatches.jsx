import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useBatches = () => {
    //public Axios call to fetch banner data
    const axios = useAxios()

    const { data: batches, isLoading, refetch } = useQuery({
        queryKey: ['batches'],
        queryFn: async () => {
            const res = await axios.get('/batches')
            return res.data;
        }
    })

    return [batches, isLoading, refetch];
};

export default useBatches;