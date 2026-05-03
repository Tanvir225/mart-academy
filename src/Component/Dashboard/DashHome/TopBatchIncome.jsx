import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const TopBatchIncome = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["top-batch-income"],
        queryFn: async () => {
            const res = await axios.get("/top-batch-income");
            return res.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Top Batch Income</h2>

            <div className="max-h-[300px] overflow-y-auto">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-[#0f172a] p-3 rounded-lg"
                    >
                        <div>
                            <p className="text-sm font-medium">
                                {item._id.courseTitle}
                            </p>
                            <p className="text-xs text-gray-400">
                                {item._id.batchName}
                            </p>
                        </div>

                        <p className="text-teal-400 font-bold">
                            ৳{item.totalIncome?.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBatchIncome;