import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";


const EnrollPage = () => {
    const { id } = useParams(); // courseId
    const { user } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] =
        useState(null);

    // 📚 Get Course
    useEffect(() => {
        axios.get(`/courses/${id}`).then((res) => {
            setCourse(res.data);
        });
    }, [id, axios]);

    // 📦 Get Upcoming Batches
    useEffect(() => {
        axios
            .get(`/batches/course/${id}`)
            .then((res) => {
                setBatches(res.data);
            });
    }, [id, axios]);

    // 💳 Payment + Enroll
    const handleEnroll = async () => {
        if (!selectedBatch) {
            return toast.error(
                "Please select a batch"
            );
        }

        const enrollData = {
            studentEmail: user?.email,
            studentName: user?.displayName,

            courseId: course?._id,
            courseTitle: course?.title,

            batchId: selectedBatch?._id,
            batchName: selectedBatch?.batchName,

            amount: course?.price,
            paymentId: "MANUAL_" + Date.now(),
            paymentStatus: "paid",

            enrolledAt: new Date(),
            status: "active",
        };

        const res = await axios.post(
            "/enrollments",
            enrollData
        );

        if (res.data.insertedId) {
            toast.success(
                "Enrollment Successful 🎉"
            );
        } else {
            toast.error(
                res.data.message ||
                "Already enrolled"
            );
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <button onClick={() => navigate(-1)} className="btn btn-sm btn-outline mb-4">
                Back
            </button>

            {/* Course Info */}
            <div className="card bg-base-100 shadow">
                <div className="card-body">

                    <h2 className="card-title text-2xl">
                        {course?.title}
                    </h2>

                    <p>Course Fee: ৳ {course?.summary?.price || 0}</p>

                </div>
            </div>

            {/* Batch Selection */}
            <div className="mt-6">

                <h3 className="font-bold text-lg mb-3">
                    Select Upcoming Batch
                </h3>

                {batches.length === 0 && (
                    <div className="alert alert-warning">
                        No upcoming batch available
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">

                    {batches.map((batch) => (
                        <div
                            key={batch._id}
                            onClick={() =>
                                setSelectedBatch(batch)
                            }
                            className={`card border cursor-pointer
              ${selectedBatch?._id ===
                                    batch._id
                                    ? "border-teal-400 bg-base-100"
                                    : ""
                                }`}
                        >
                            <div className="card-body">

                                <h4 className="font-bold">
                                    {batch.batchName}
                                </h4>

                                <p>
                                    Start:
                                    {batch.startDate}
                                </p>

                                <p>
                                    Seat Left:
                                    {batch.seat}
                                </p>

                                {
                                    selectedBatch?._id ===
                                        batch._id && (
                                        <span className="badge badge-success text-white font-light">
                                            Selected
                                        </span>
                                        )
                                }

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Payment Section */}
            {selectedBatch && (
                <div className="card bg-base-100 shadow mt-6">
                    <div className="card-body">

                        <h3 className="font-bold text-lg">
                            Payment Summary
                        </h3>

                        <div className="flex justify-between">
                            <span>Course Fee</span>
                            <span>
                                ৳ {course?.summary?.price || 0}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Batch</span>
                            <span>
                                {
                                    selectedBatch?.batchName
                                }
                            </span>
                        </div>

                        <button
                            onClick={handleEnroll}
                            className="btn bg-teal-400 text-black w-full mt-4"
                        >
                            Pay & Enroll
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
};

export default EnrollPage;
