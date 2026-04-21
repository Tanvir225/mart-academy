import React, { useEffect, useState } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import useUser from "../../Hook/useUser";
import Loading from "../../Component/Share/Loading";
import UpdateUserModal from "../../Component/Dashboard/User/UpdateUserModal";
import useAxios from "../../Hook/useAxios";
import toast from "react-hot-toast";
// use your real data here

const ProfilePage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [myCourses, setMyCourses] = useState();
    const [loading, setLoading] = useState(true);
    const axios = useAxios();
    //user data
    const [userData, isLoading, refetch] = useUser();

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const res = await axios.get(`/my-courses/${userData?.email}`);
                setMyCourses(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching my courses:", error);
                setLoading(false);
            }
        };
        if (userData?.email) {
            fetchMyCourses();
        }

    }, [axios, userData?.email]);

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    // handle success story submit
    const handleStorySubmit = (e) => {
        e.preventDefault();
        const story = e.target.story.value;

        // story docs
        const storyData = {
            user: userData?.name,
            email: userData?.email,
            photo: userData?.photo,
            courseTitle: selectedCourse?.courseTitle,
            story,
        };

        // send to server
        axios.post("/story", storyData)
            .then(res => {
                if (res?.data) {
                    if (res?.data?.status) {
                        toast.error(res?.data?.message);
                        setSelectedCourse(null);
                    }
                    else {
                        toast.success("Story submitted successfully!");
                        setSelectedCourse(null);
                    }
                } else {
                    toast.error("Failed to submit story. Please try again.");
                }
            })
            .catch(err => {
                console.error("Error submitting story:", err);
                toast.error("An error occurred while submitting your story. Please try again.");
            });

    };


    // console.log(userData);


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
                        {myCourses?.map(course => (
                            <div
                                key={course.id}
                                className="card bg-base-100 shadow-md border"
                            >
                                <div className="card-body">
                                    <img className="rounded-lg h-32 md:h-40 object-cover" src={course.courseImage} alt={course.courseTitle} srcset="" />
                                    <h2 className="card-title text-base text-teal-200">
                                        {course.courseTitle}
                                    </h2>

                                    <p className="text-xs">{course.courseDescription}</p>

                                    <div className="card-actions justify-end">
                                        <button
                                            className="btn btn-outline btn-sm font-light border-teal-200 hover:bg-teal-200 hover:text-black"
                                            onClick={() => setSelectedCourse(course)}
                                        >
                                            Success Story
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
                        {myCourses?.map(course => (
                            <div
                                key={course.id}
                                className="card bg-base-100 border shadow"
                            >
                                <div className="card-body">

                                    <img src={course.courseImage} alt={course.courseTitle} className="h-32 object-cover rounded-lg" />

                                    <h2 className="card-title text-base text-teal-200">
                                        {course.courseTitle}
                                    </h2>

                                    <p className="text-xs">{course.courseDescription}</p>

                                    <div className="flex items-center justify-center flex-wrap gap-2">
                                        <span className="badge text-xs border-teal-200 badge-outline">
                                            {course?.status}
                                        </span>
                                        <span className="badge text-xs border-teal-200 badge-outline">
                                            {course?.paymentMethod}
                                        </span>
                                        <span className="badge text-xs border-teal-200 badge-outline">
                                            {course?.amount} BDT
                                        </span>
                                        <span className="badge text-xs border-teal-200 badge-outline">
                                            {course?.couponCode} || {course?.discountAmount} BDT
                                        </span>
                                        <span className="badge text-xs border-teal-200 badge-outline">
                                            {course?.enrolledAt && new Date(course.enrolledAt).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>

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
                        <h3 className="font-bold text-lg mb-2">Story: {selectedCourse.courseTitle}</h3>
                        <form onSubmit={handleStorySubmit} className="space-y-4">
                            <textarea className="textarea textarea-bordered border-teal-200 focus:outline-none w-full" placeholder="Write your story..." name="story" />

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


