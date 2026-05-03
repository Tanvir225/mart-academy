import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const RecentEnrollments = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["recent-enrollments"],
        queryFn: async () => {
            const res = await axios.get("/recent-enrollments");
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>

            <div className="max-h-[350px] space-y-3 p-2 overflow-y-auto">
                {data.map((item) => (
                    <div key={item._id} className="flex justify-between items-center bg-[#0f172a] p-3 rounded-lg">
                        <div>
                            <p className="text-sm font-medium">{item.studentName}</p>
                            <p className="text-xs text-gray-400">{item.courseTitle}</p>
                        </div>

                        <span className="text-xs">
                            {item?.batchName} || {item?.amount} ৳
                        </span>
                        <span className="hidden md:block text-xs">
                            {item?.enrolledAt ? new Date(item.enrolledAt).toLocaleDateString() : "N/A"}
                        </span>

                        <p className={`text-xs p-1 rounded 
                            ${item.status === "approved" ? "bg-green-500" :
                                item.status === "pending" ? "bg-yellow-500" :
                                    "bg-red-500"}`}>
                            {item.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentEnrollments;