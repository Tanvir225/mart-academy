import React, { useState } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import useUser from "../../Hook/useUser";
import Loading from "../../Component/Share/Loading";
import UpdateUserModal from "../../Component/Dashboard/User/UpdateUserModal";
// use your real data here

const ProfilePage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [openUpdate, setOpenUpdate] = useState(false);


    //user data
    const [userData, isLoading, refetch] = useUser();

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(userData);

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>


            <div role="tablist" className="tabs tabs-bordered justify-center">

                {/* ---------------- PERSONAL DATA ---------------- */}
                <input
                    type="radio"
                    name="profile-tabs"
                    role="tab"
                    className="tab"
                    aria-label="Personal Data"
                    defaultChecked
                />

                <div role="tabpanel" className="tab-content p-6 ring-teal-100 ring-1 ring-offset-1 rounded-box mt-4 shadow">

                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold ">
                            Personal Information
                        </h3>

                        <FaEdit className="cursor-pointer" onClick={() => setOpenUpdate(true)} size={22} ></FaEdit>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 font-light">

                        {/* Profile Photo */}
                        <div className="flex flex-col items-center gap-3">
                            <img
                                src={userData?.photo}
                                alt="student"
                                className="w-32 h-32 rounded-full object-cover ring ring-teal-300 ring-offset-2"
                            />

                            <p className="font-semibold">
                                STU - {userData?.studentId}
                            </p>

                            <span className="badge badge-outline border-teal-300">
                                {userData?.role}
                            </span>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 text-sm">

                            <p>
                                <strong className="text-teal-400">Name : </strong>
                                {userData?.name}
                            </p>

                            <p>
                                <strong className="text-teal-400">Email : </strong>
                                {userData?.email}
                            </p>

                            <p>
                                <strong>Father Name : </strong>
                                {userData?.fatherName}
                            </p>

                            <p>
                                <strong>Mother Name : </strong>
                                {userData?.motherName}
                            </p>

                            <p>
                                <strong>Date of Birth : </strong>
                                {userData?.dob}
                            </p>

                            <p>
                                <strong>Gender : </strong>
                                {userData?.gender}
                            </p>

                            <p>
                                <strong>Blood Group : </strong>
                                {userData?.blood}
                            </p>

                            <p>
                                <strong>Religion : </strong>
                                {userData?.religion}
                            </p>

                            <p>
                                <strong>Phone : </strong>
                                {userData?.phone}
                            </p>

                            <p>
                                <strong>Guardian : </strong>
                                {userData?.guardianName}
                            </p>

                            <p>
                                <strong>NID / Birth Cert : </strong>
                                {userData?.nid}
                            </p>

                            <p>
                                <strong>Present Address : </strong>
                                {userData?.presentAddress}
                            </p>

                            <p>
                                <strong>Account Created : </strong>
                                {new Date(userData?.createdAt).toLocaleDateString()}
                            </p>

                        </div>
                    </div>
                </div>

                {/* ---------------- REVIEW ---------------- */}
                <input
                    type="radio"
                    name="profile-tabs"
                    role="tab"
                    className="tab"
                    aria-label="Review"
                />

                <div role="tabpanel" className="tab-content p-6 bg-base-100 rounded-box mt-4 shadow">

                    <h3 className="text-xl font-semibold mb-4">
                        Review Courses
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {courses.map(course => (
                            <div
                                key={course.id}
                                className="card bg-base-100 shadow-md border"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {course.title}
                                    </h2>

                                    <p>{course.description}</p>

                                    <div className="card-actions justify-end">
                                        <button
                                            className="btn btn-outline btn-sm font-light border-teal-200 hover:bg-teal-200 hover:text-black"
                                            onClick={() => setSelectedCourse(course)}
                                        >
                                            Review Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------------- HISTORY ---------------- */}
                <input
                    type="radio"
                    name="profile-tabs"
                    role="tab"
                    className="tab"
                    aria-label="History"
                />

                <div role="tabpanel" className="tab-content p-6 bg-base-100 rounded-box mt-4 shadow">

                    <h3 className="text-xl font-semibold mb-4">
                        Purchase History
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {courses.map(course => (
                            <div
                                key={course.id}
                                className="card bg-base-100 border shadow"
                            >
                                <div className="card-body">

                                    <h2 className="card-title">
                                        {course.title}
                                    </h2>

                                    <p>{course.description}</p>

                                    <span className="badge border-teal-200 badge-outline">
                                        Purchased
                                    </span>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>



            {/* Review Modal */}
            {selectedCourse && (
                <dialog id="review_modal" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-2">Review: {selectedCourse.title}</h3>
                        <form className="space-y-4">
                            <textarea className="textarea textarea-bordered border-teal-200 focus:outline-none w-full" placeholder="Write your review..." />

                            <div className="modal-action">
                                <button type="submit" className="btn button">Submit</button>
                                <button
                                    type="button"
                                    className="btn btn-outline border-teal-200 font-light hover:bg-teal-200 hover:text-black"
                                    onClick={() => setSelectedCourse(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}

            {/* update user modal */}
            {
                <UpdateUserModal
                    userData={userData}
                    open={openUpdate}
                    onClose={() => setOpenUpdate(false)}
                    refetch={refetch}
                />

            }
        </div>
    );
};

export default ProfilePage;

// Sample course data
const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn how to build modern web applications."
    },
    {
        id: 2,
        title: "Data Science",
        description: "Master data analysis and machine learning."
    },

];
