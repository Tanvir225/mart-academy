import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import useAuth from "../../../Hook/useAuth";

const NotificationPanel = () => {
    const axios = useAxios();
    const { user } = useAuth();

    const { data = [], isLoading } = useQuery({
        queryKey: ["notifications", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`/notifications/${user.email}`);
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold ">Notifications</h2>

            <div className="space-y-3 max-h-[400px] p-1 overflow-y-auto">
                {data.length === 0 && (
                    <p className="text-gray-400 text-sm">No notifications</p>
                )}

                {data.map((item) => (
                    <div key={item._id} className="bg-[#0f172a] p-3 rounded-lg">
                        <p className="text-sm">{item.message}</p>
                        <p className="text-xs text-gray-400 mt-1">
                            {new Date(item.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationPanel;