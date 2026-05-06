import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer,Legend } from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";

const COLORS = ["#14b8a6", "#6366f1", "#f59e0b"];

const GenderChart = () => {
    const axios = useAxios();

    const { data = [], isLoading } = useQuery({
        queryKey: ["gender-stats"],
        queryFn: async () => {
            const res = await axios.get("/user-gender-stats");
            return res.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-lg font-semibold">Users Ratio</h2>

            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="_id"
                        outerRadius={60}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GenderChart;