import { useEffect, useState } from "react";
import useAxios from "../../../Hook/useAxios";

const StatsCards = () => {

    const axios = useAxios();

    const [stats, setStats] = useState([])

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("/admin-stats");
                setStats(response.data);
            } catch (error) {
                console.error("Error fetching stats:", error);
                throw error;
            }
        };
        fetchStats();
    }, [axios]);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
                <h4 className="text-sm text-gray-400">Total Students</h4>
                <h2 className="text-2xl font-bold mt-2">{stats.totalStudents?.toLocaleString()}</h2>
            </div>

            {/* totalCourses */}
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
                <h4 className="text-sm text-gray-400">Total Courses</h4>
                <h2 className="text-2xl font-bold mt-2">{stats.totalCourses?.toLocaleString()}</h2>
            </div>

            {/* totalBatches */}
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
                <h4 className="text-sm text-gray-400">Total Batches</h4>
                <h2 className="text-2xl font-bold mt-2">{stats.totalBatches?.toLocaleString()}</h2>
            </div>

            {/* totalRevenue */}
            <div className="bg-[#1e293b] p-5 rounded-xl shadow">
                <h4 className="text-sm text-gray-400">Total Revenue</h4>
                <h2 className="text-2xl font-bold mt-2">{stats.totalRevenue?.toLocaleString()} ৳</h2>
            </div>
        </div>
    );
};

export default StatsCards;