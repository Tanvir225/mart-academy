import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useEnrollments = () => {
    //public Axios call to fetch banner data
    const axios = useAxios()

    const { data: enrolls, isLoading, refetch } = useQuery({
        queryKey: ['enrolls'],
        queryFn: async () => {
            const res = await axios.get('/enrolls')
            return res.data;
        }
    })

    return [enrolls, isLoading, refetch];
};

export default useEnrollments;