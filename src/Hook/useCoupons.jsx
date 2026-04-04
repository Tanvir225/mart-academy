import React from 'react';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCoupons = () => {
    //public Axios call to fetch banner data
    const axios = useAxios()

    const { data: coupons, isLoading, refetch } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axios.get('/coupons')
            return res.data;
        }
    })

    return [coupons, isLoading, refetch];
};

export default useCoupons;