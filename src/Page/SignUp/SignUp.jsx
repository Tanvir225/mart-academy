import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import usePublicAxios from "../../Hook/usePublicAxios";

const image_hosting_key = "YOUR_IMGBB_KEY"; // 🔑 add your key
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const publicAxios = usePublicAxios();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const forms = e.target;

        // BASIC
        const name = forms.name.value;
        const email = forms.email.value;
        const password = forms.password.value;
        const photo = forms.photo.files[0];

        // EXTRA FIELDS
        const fatherName = forms.fatherName.value;
        const motherName = forms.motherName.value;
        const dob = forms.dob.value;
        const gender = forms.gender.value;
        const blood = forms.blood.value;
        const religion = forms.religion.value;
        const presentAddress = forms.presentAddress.value;
        const permanentAddress = forms.permanentAddress.value;
        const phone = forms.phone.value;
        const guardianName = forms.guardianName.value;
        const nid = forms.nid.value;


        try {
            // 🔑 Student ID
            const studentId = uuidv4().slice(0, 8).toUpperCase();

            // 📸 Upload Image
            const imageFile = { image: photo };
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: { "content-type": "multipart/form-data" },
            });

            const photoURL = res?.data?.data?.display_url;

            // 🔐 Firebase Create
            const result = await createUser(email, password);
            const user = result.user;

            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            });

            // 🗄️ Save to DB
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
                permanentAddress,
                phone,
                guardianName,
                nid,
                role: "student",
                createdAt: new Date(),
            };

            await publicAxios.post("/users", dataUser);

            alert("Student Signup Successful ✅");
            forms.reset();
        } catch (error) {
            console.error(error);
            alert("Signup Failed ❌");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
            <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center justify-between border-b-2 p-2">
                        <h2 className="text-lg lg:text-2xl font-bold text-center mb-4">
                            Student Signup
                        </h2>

                        <img className="w-12 h-12 rounded-full ring-2 ring-offset-2" src="https://i.ibb.co.com/ZzygpVtn/logo.jpg" alt="" srcset="" />
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Name */}
                        <input
                            name="name"
                            placeholder="Student Name"
                            className="input input-bordered w-full focus:outline-none"
                            required
                        />

                        {/* Parents */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="fatherName"
                                required
                                placeholder="Father Name"
                                className="input input-bordered w-full focus:outline-none"
                            />
                            <input
                                name="motherName"
                                required
                                placeholder="Mother Name"
                                className="input input-bordered w-full focus:outline-none"
                            />
                        </div>

                        {/* DOB + Gender */}
                        <div className="grid grid-cols-2 gap-4">
                            <input type="date" name="dob" placeholder="" className="input input-bordered w-full focus:outline-none" required />

                            <select name="gender" required className="input input-bordered w-full focus:outline-none">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Blood + Religion */}
                        <div className="grid grid-cols-2 gap-4">
                            <select name="blood" required className="input input-bordered w-full focus:outline-none">
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                            </select>

                            <select name="religion" required className="input input-bordered w-full focus:outline-none">
                                <option>Muslim</option>
                                <option>Hindu</option>
                                <option>Christian</option>
                                <option>Buddhist</option>
                            </select>
                        </div>

                        {/* Address */}
                        <input
                            name="presentAddress"
                            placeholder="Present Address"
                            className="input input-bordered w-full focus:outline-none"
                            required
                        />

                        <input
                            name="permanentAddress"
                            placeholder="Permanent Address"
                            className="input input-bordered w-full focus:outline-none"
                        />

                        {/* Phone + Email */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="phone"
                                placeholder="Phone"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>

                        {/* Guardian */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="guardianName"
                                placeholder="Guardian Name"
                                className="input input-bordered w-full focus:outline-none"
                            />

                            <input
                                name="nid"
                                placeholder="NID / Birth Certificate"
                                className="input input-bordered w-full focus:outline-none"
                                required
                            />
                        </div>



                        {/* Password */}
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full focus:outline-none"
                            required
                        />

                        {/* Photo */}
                        <input
                            name="photo"
                            type="file"
                            className="input input-bordered w-full py-1 focus:outline-none"
                            required
                        />

                        <button className="btn  bg-teal-400 font-light w-full ">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
