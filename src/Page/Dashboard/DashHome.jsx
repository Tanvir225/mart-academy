import EnrollmentChart from "../../Component/Dashboard/DashHome/EnrollmentChart";
import GenderChart from "../../Component/Dashboard/DashHome/GenderChart";
import NotificationPanel from "../../Component/Dashboard/DashHome/NotificationPanel";
import RecentEnrollments from "../../Component/Dashboard/DashHome/RecentEnrollments";
import StatsCards from "../../Component/Dashboard/DashHome/StatsCards";
import TopBatchIncome from "../../Component/Dashboard/DashHome/TopBatchIncome";
import TopCourses from "../../Component/Dashboard/DashHome/TopCourses";


const DashHome = () => {
    return (
        <div className="space-y-4 min-h-screen text-white">

            {/* hero section */}
            <div className="">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="text-gray-300">Manage your academy from one place!</p>
            </div>

            {/* 🔥 Top Stats */}
            <StatsCards></StatsCards>

            {/* 📊 Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#1e293b] p-4 rounded-xl">
                    <EnrollmentChart></EnrollmentChart>
                </div>

                <div className="bg-[#1e293b] p-4 rounded-xl">
                    <TopCourses></TopCourses>
                </div>
            </div>

            {/* topbatch income & gender chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-[#1e293b] p-4 rounded-xl">
                    <TopBatchIncome></TopBatchIncome>
                </div>

                <div className="bg-[#1e293b] p-4 rounded-xl">
                    <GenderChart></GenderChart>
                </div>

            </div>

            {/* 📋 Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="lg:col-span-2 bg-[#1e293b] p-4 rounded-xl">
                    <RecentEnrollments></RecentEnrollments>
                </div>

                <div className="bg-[#1e293b] p-2 rounded-xl">
                    <NotificationPanel></NotificationPanel>
                </div>
            </div>


        </div>
    );
};

export default DashHome;