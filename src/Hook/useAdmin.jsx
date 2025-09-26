import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axios = useAxios();
  const { user, loading } = useAuth();
  console.log(user);

  const { data: isAdmin, isPending } = useQuery({
    // run only when we know the user object is ready
    enabled: !!user && !loading,
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/admin/${user?.email}`);
      return res?.data?.isAdmin;
    },
  });

  return [isAdmin, isPending];
};

export default useAdmin;
