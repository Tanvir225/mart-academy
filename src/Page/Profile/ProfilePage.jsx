import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import useUser from "../../Hook/useUser";
import Loading from "../../Component/Share/Loading";
// use your real data here

const ProfilePage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    //user data
    const [userData, isLoading] = useUser();

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(userData);

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

            <div role="tablist" className="tabs tabs-bordered justify-center">
                <input type="radio" name="profile-tabs" role="tab" className="tab" aria-label="Personal Data" defaultChecked />
                <div role="tabpanel" className="tab-content p-6">
                    <h3 className="text-xl font-semibold mb-4">Personal Data</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                        <p><strong className="text-teal-200">Name : </strong> {userData?.name}</p>
                        <p><strong className="text-teal-200">Email : </strong> {userData?.email}</p>
                        <p><strong>Address : </strong>{userData?.address}</p>
                        <p><strong>Phone : </strong> {userData?.phone}</p>
                        <p><strong className="text-teal-200">Student ID : </strong>STU - {`${userData?.studentId}`}</p>
                    </div>
                </div>

                <input type="radio" name="profile-tabs" role="tab" className="tab" aria-label="Review" />
                <div role="tabpanel" className="tab-content p-6">
                    <h3 className="text-xl font-semibold mb-4">Review Courses</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {courses.map(course => (
                            <div key={course.id} className="card bg-base-100 shadow-md border">
                                <div className="card-body">
                                    <h2 className="card-title">{course.title}</h2>
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

                <input type="radio" name="profile-tabs" role="tab" className="tab" aria-label="History" />
                <div role="tabpanel" className="tab-content p-6">
                    <h3 className="text-xl font-semibold mb-4">Purchase History</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {courses.map(course => (
                            <div key={course.id} className="card bg-base-100 border shadow">
                                <div className="card-body">
                                    <h2 className="card-title">{course.title}</h2>
                                    <p>{course.description}</p>
                                    <span className="badge border-teal-200 badge-outline">Purchased</span>
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
