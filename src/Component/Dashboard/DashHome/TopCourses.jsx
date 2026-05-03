import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const TopCourses = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["top-courses"],
        queryFn: async () => {
            const res = await axios.get("/top-courses");
            return res.data;
        }
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Top Courses</h2>

            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-[#0f172a] p-3 rounded-lg">
                        <p className="text-sm">{item._id}</p>
                        <div>
                            <p className="text-xs text-right text-gray-300">Enrollments:{item.totalEnroll}</p>
                            <progress className="progress progress-accent" value={item.totalEnroll} max="500"></progress>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCourses;