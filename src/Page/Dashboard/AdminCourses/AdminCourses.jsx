import { useState } from "react";
import useCourses from "../../../Hook/useCourses";
import UpdateCourseModal from "../../../Component/Dashboard/UpdateCourseModal.jsx/UpdateCourseModal";
import { Link } from "react-router-dom";



const AdminCourses = () => {
    const [courses, refetch] = useCourses()
    const [open, setOpen] = useState(false);

    const [courseList, setCourseList] = useState()


    const [selectedCourse, setSelectedCourse] =
        useState(null);

    // 👉 View
    const handleView = (course) => {
        setSelectedCourse(course);
        document
            .getElementById("view_modal")
            .showModal();
    };

    // 👉 Delete
    const handleDelete = (id) => {
        const confirmDelete = confirm(
            "Are you sure?"
        );

        if (confirmDelete) {
            const filtered =
                courses?.filter(
                    (c) => c._id !== id
                );

            setCourseList(filtered);
        }
    };

    // 👉 Update
    const handleUpdate = (course) => {
        setSelectedCourse(course);
        setOpen(true);
    };

    return (
        <div className="">

            {/* PAGE TITLE */}
            <div className="flex justify-between gap-5">
                <h2 className="text-xl font-bold border-b-2 mb-3 p-2">
                    📚 Mart Academy Course - {courses?.length} <sub className="font-light text-sm text-teal-200">available</sub>
                </h2>

                <Link to={"/dashboard/add-course"} className="btn bg-teal-200 text-black font-light">Add Course</Link>
            </div>

            {/* COURSE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {courses?.map((course) => (
                    <div
                        key={course._id}
                        className="card bg-base-100 shadow-xl border"
                    >

                        {/* Thumbnail */}
                        <figure className="h-48 overflow-hidden">
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <div className="card-body">

                            {/* Title */}
                            <h2 className="card-title">
                                {course.title}
                            </h2>

                            <p className="text-sm opacity-70">
                                {course.subtitle}
                            </p>

                            {/* Summary */}
                            <div className="flex justify-between text-sm mt-2">

                                <span>
                                    📦 {course.summary.modules} Modules
                                </span>

                                <span>
                                    ⏳ {course.summary.duration} Months
                                </span>

                                <span>
                                    🧪 {course.summary.projects} Projects
                                </span>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {course.skill.map((s, i) => (
                                    <span
                                        key={i}
                                        className={`badge ${s.bg} ${s.text}`}
                                    >
                                        {s.name}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="card-actions justify-end mt-4">

                                <button
                                    className="btn btn-sm btn-info font-light text-white"
                                    onClick={() =>
                                        handleView(course)
                                    }
                                >
                                    View
                                </button>

                                <button
                                    className="btn btn-sm font-light text-white btn-secondary"
                                    onClick={() =>
                                        handleUpdate(course)
                                    }
                                >
                                    Update
                                </button>

                                <button
                                    className="btn btn-sm btn-error font-light text-white"
                                    onClick={() =>
                                        handleDelete(course._id)
                                    }
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* VIEW MODAL */}
            <dialog id="view_modal" className="modal">
                <div className="modal-box max-w-3xl">

                    {selectedCourse && (
                        <>

                            <h3 className="font-bold text-lg mb-4">
                                {selectedCourse.title}
                            </h3>

                            {/* Intro Video */}
                            <div className="mb-4">
                                <iframe
                                    className="w-full h-64 rounded-lg"
                                    src={selectedCourse.introVideo.replace(
                                        "youtu.be/",
                                        "youtube.com/embed/"
                                    )}
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Description */}
                            <p className="mb-4">
                                {selectedCourse.description}
                            </p>

                            {/* Modules List */}
                            <div className="max-h-60 overflow-y-auto">

                                {selectedCourse.modules.map(
                                    (m) => (
                                        <div
                                            key={m.module}
                                            className="border p-3 rounded-lg mb-2"
                                        >
                                            <h4 className="font-semibold">
                                                Module {m.module} :
                                                {m.title}
                                            </h4>
                                            <p className="text-sm opacity-70">
                                                {m.description}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>

                        </>
                    )}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn font-light bg-teal-300 text-black">
                                Close
                            </button>
                        </form>
                    </div>

                </div>
            </dialog>

            {
                open &&
                <UpdateCourseModal course={selectedCourse}
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    refetch={refetch}></UpdateCourseModal>
            }

        </div>
    );
};

export default AdminCourses;
