import toast from "react-hot-toast";

import {
    sendEmailVerification,
    updateProfile,
    signOut,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hook/usePublicAxios";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import auth from "../../Firebase/firebase.config";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
    const { createUser } = useAuth();
    const publicAxios = usePublicAxios();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Signing up...");

        const forms = e.target;

        // BASIC
        const name = forms.name.value;
        const email = forms.email.value;
        const password = forms.password.value;
        const photo = forms.photo.files[0];

        // EXTRA
        const fatherName = forms.fatherName.value;
        const motherName = forms.motherName.value;
        const dob = forms.dob.value;
        const gender = forms.gender.value;
        const blood = forms.blood.value;
        const religion = forms.religion.value;
        const presentAddress = forms.presentAddress.value;
        const phone = forms.phone.value;
        const guardianName = forms.guardianName.value;
        const nid = forms.nid.value;

        try {
            // 🆔 Student ID
            const studentId = uuidv4().slice(0, 8).toUpperCase();

            // 📸 Upload Image
            const imageFile = { image: photo };
            const uploadRes = await axios.post(
                image_hosting_api,
                imageFile,
                {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            );

            const photoURL =
                uploadRes?.data?.data?.display_url ||
                "https://i.ibb.co.com/TM6jBG7h/user-photo.jpg";

            // 🔐 Create User
            const result = await createUser(email, password);
            const user = result.user;

            // 👤 Update Profile
            await updateProfile(user, {
                displayName: name,
                photoURL,
            });

            // 🗄️ Save DB
            const dataUser = {
                name,
                email,
                photo: photoURL,
                studentId,
                fatherName,
                motherName,
                dob,
                gender,
                blood,
                religion,
                presentAddress,
                phone,
                guardianName,
                nid,
                role: "student",
                createdAt: new Date(),
            };

            await publicAxios.post("/users", dataUser);

            // 📧 Send Verification (IMPORTANT → await)
            await sendEmailVerification(user);

            toast.success(
                "Verification email sent. Please check inbox.",
                { id: toastId }
            );

            // 🔒 Logout until verified
            await signOut(auth);

            // 🚀 Redirect
            navigate("/verify-email");
        } catch (error) {
            console.error(error);
            toast.error("Signup Failed ❌", {
                id: toastId,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
            <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className="flex items-center justify-between border-b-2 p-2">
                        <div>
                            <img className="w-14 rounded-full ring-1 ring-offset-1 ring-teal-200" src="https://i.ibb.co.com/ZzygpVtn/logo.jpg" alt="mart-academy" srcset="" />
                            <h2 className="text-xl font-bold">
                                Student Signup
                            </h2>

                        </div>

                        <Link
                            to="/login"
                            className="btn btn-sm btn-outline"
                        >
                            Back
                        </Link>
                    </div>

                    <form
                        className="space-y-3"
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="name"
                            placeholder="Student Name"
                            className="input input-bordered w-full focus:outline-none"
                            required
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="fatherName"
                                placeholder="Father Name"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                            <input
                                name="motherName"
                                placeholder="Mother Name"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="date"
                                name="dob"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                            <select
                                name="gender"
                                className="input input-bordered w-full focus:outline-none"
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="presentAddress"
                                placeholder="Present Address"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                            <input
                                name="phone"
                                placeholder="Phone"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select
                                name="religion"
                                className="input input-bordered w-full focus:outline-none"
                            >
                                <option>Muslim</option>
                                <option>Hindhu</option>
                                <option>Boddho</option>
                                <option>Christians</option>
                            </select>

                            <select
                                name="blood"
                                className="input input-bordered w-full focus:outline-none"
                            >
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            <input
                                name="guardianName"
                                type="text"
                                placeholder="Guardian Name"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                            <input
                                name="nid"
                                type="text"
                                placeholder="NID Number / Birth Certificate"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                        </div>


                        <div className="grid grid-cols-2 gap-4">

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                        </div>


                        <input
                            name="photo"
                            type="file"
                            className="file-input file-input-bordered w-full focus:outline-none"
                            required
                        />

                        <button className="btn bg-teal-400 w-full font-light">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

