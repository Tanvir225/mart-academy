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


    // coupon code
    const [couponCode, setCouponCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [appliedCoupon, setAppliedCoupon] =
        useState(null);

    // payment method
    const [method, setMethod] = useState(null);
    const [trxId, setTrxId] = useState("");
    const [senderNumber, setSenderNumber] =
        useState("");

    // 📚 Get Course
    useEffect(() => {
        axios.get(`/courses/${id}`).then((res) => {
            setCourse(res.data);
        });
    }, [id, axios]);



    // Set Base Price
    useEffect(() => {
        if (course?.summary?.price) {
            setFinalPrice(course?.summary?.price);
        }
    }, [course]);

    // 📦 Get Upcoming Batches
    useEffect(() => {
        axios
            .get(`/batches/course/${id}`)
            .then((res) => {
                setBatches(res.data);
            });
    }, [id, axios]);

    // apply coupon function
    const handleApplyCoupon = async () => {
        if (!couponCode) {
            return toast.error("Enter coupon code");
        }

        const res = await axios.post(
            "/verify-coupon",
            {
                code: couponCode,
                courseId: course?._id,
            }
        );

        if (!res.data.valid) {
            return toast.error(res.data.message);
        }

        const coupon = res.data.coupon;

        let discountAmount = 0;

        if (coupon.discountType === "percentage") {
            discountAmount =
                (course?.summary?.price * coupon.discountValue) / 100;
        } else {
            discountAmount = coupon.discountValue;
        }

        setDiscount(discountAmount);
        setFinalPrice(course?.summary?.price - discountAmount);
        setAppliedCoupon(coupon);


        toast.success("Coupon applied successfully");
    };

    // 💳 Payment + Enroll
    const handleEnroll = async () => {
        if (!selectedBatch) {
            return toast.error(
                "Please select a batch"
            );
        }

        if (!method) {
            return toast.error("Select payment method");
        }

        if (!trxId || !senderNumber) {
            return toast.error("Fill transaction info");
        }

        const enrollData = {
            studentEmail: user?.email,
            studentName: user?.displayName,

            courseId: course?._id,
            courseTitle: course?.title,

            batchId: selectedBatch?._id,
            batchName: selectedBatch?.batchName,

            amount: finalPrice,

            paymentMethod: method,
            transactionId: trxId,
            senderNumber: senderNumber,

            paymentStatus: "pending", // 🔥 important
            status: "pending",

            couponCode: appliedCoupon?.code || null,
            discountAmount: discount,

            enrolledAt: new Date(),
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



                    </div>

                    {/* Coupon Section */}
                    <div className="card-body -mt-7">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter Coupon"
                                className="input input-bordered focus:outline-none"
                                value={couponCode}
                                onChange={(e) =>
                                    setCouponCode(e.target.value)
                                }
                            />

                            <button
                                onClick={handleApplyCoupon}
                                className="btn btn-outline"
                            >
                                Apply
                            </button>
                        </div>

                        {/* Price Summary */}
                        <div className="mt-4 space-y-2">

                            <div className="flex justify-between">
                                <span>Original Price</span>
                                <span>৳ {course?.summary?.price}</span>
                            </div>

                            {discount > 0 && (
                                <div className="flex justify-between text-green-500">
                                    <span>Discount</span>
                                    <span>- ৳ {discount}</span>
                                </div>
                            )}

                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>৳ {finalPrice}</span>
                            </div>

                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="card-body -mt-7">

                        <h3 className="font-bold text-lg mb-3">
                            Payment Method
                        </h3>

                        <div className="grid grid-cols-3 gap-2">

                            {/* bKash */}
                            <div
                                onClick={() => setMethod("bkash")}
                                className={`border p-2 rounded cursor-pointer text-center
                                    ${method === "bkash" ? "border-pink-500" : ""}`}
                            >
                                <img src="https://i.ibb.co/7tD3nhmp/BKash-Icon-Logo-wine.png" className="h-12 mx-auto" />
                                <p>bKash</p>
                            </div>

                            {/* Nagad */}
                            <div
                                onClick={() => setMethod("nagad")}
                                className={`border p-2 rounded cursor-pointer text-center
                                    ${method === "nagad" ? "border-orange-500" : ""}`}
                            >
                                <img src="https://i.ibb.co/B5mjcFnD/Nagad-Vertical-Logo-wine.png" className="h-12 mx-auto" />
                                <p>Nagad</p>
                            </div>

                            {/* Rocket */}
                            <div
                                onClick={() => setMethod("rocket")}
                                className={`border p-2 rounded cursor-pointer text-center
                                ${method === "rocket" ? "border-purple-500" : ""}`}
                            >
                                <img src="https://i.ibb.co/cXS1Dm0J/dutch-bangla-rocket-logo.png" className="h-12 w-11 rounded-md mx-auto" />
                                <p>Rocket</p>
                            </div>

                        </div>
                    </div>


                </div>


            )}


            <div className="bg-base-100 p-6 mt-5 space-y-5 text-center rounded-xl shadow">
                {/* QR Code */}
                {method && (
                    <div className="mt-6 text-center  ">

                        <h4 className="font-semibold mb-2">
                            Scan & Pay via {method}
                        </h4>

                        <img
                            src={`/qr/${method}-qr.jpeg`}
                            className="w-48 mx-auto border p-2"
                        />

                        <p className="text-sm mt-2">
                            Send exact amount: ৳ {finalPrice}
                        </p>

                    </div>
                )}

                {/* Transaction Form */}
                {method && (
                    <div className="flex items-center gap-4 mt-6 justify-center">

                        <input
                            type="text"
                            placeholder={`${method} Transaction ID`}
                            className="input input-bordered w-full"
                            value={trxId}
                            onChange={(e) => setTrxId(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder={`Sender ${method} Number`}
                            className="input input-bordered w-full"
                            value={senderNumber}
                            onChange={(e) =>
                                setSenderNumber(e.target.value)
                            }
                        />

                    </div>
                )}

                {/* Enroll Button */}
                {method && (
                    <div className="">
                        <button
                            onClick={handleEnroll}
                            className="btn bg-teal-400 text-black w-full font-thin"
                        >
                            Enroll
                        </button>
                    </div>
                )}


            </div>

        </div>
    );
};




export default EnrollPage;
