import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const COLORS = {
    pending: "#f59e0b",   // yellow
    approved: "#10b981",  // green
    rejected: "#ef4444",  // red
};

const EnrollmentStatusChart = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["enrollment-status-stats"],
        queryFn: async () => {
            const res = await axios.get("/enrollment-status-stats");

            // transform for recharts
            return res.data.map(item => ({
                name: item._id,
                value: item.count
            }));
        }
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold">
                Enrollment Status
            </h2>

            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={60}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[entry.name] || "#8884d8"}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EnrollmentStatusChart;