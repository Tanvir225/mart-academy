import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const EnrollmentChart = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["enrollment-stats"],
        queryFn: async () => {
            const res = await axios.get("/enrollment-stats");
            return res.data.map(item => ({
                date: item._id,
                enrollments: item.count
            }));
        }
    });

    if (isLoading) return <p>Loading...</p>;

    // 👉 Short format for X-axis
    const formatXAxis = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        }); // Apr 5
    };

  

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Enrollment Trend</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis
                        dataKey="date"
                        stroke="#ccc"
                        tickFormatter={formatXAxis}
                    />

                    <YAxis stroke="#ccc" />

                    <Tooltip
                        formatter={(value) => [`${value} Enrollments`, "Count"]}
                    />

                    <Line
                        type="monotone"
                        dataKey="enrollments"
                        stroke="#14b8a6"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EnrollmentChart;