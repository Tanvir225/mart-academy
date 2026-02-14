
import { useState } from "react";

import toast from "react-hot-toast";
import usePublicAxios from "../../../Hook/usePublicAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateUserModal = ({ userData, open, onClose, refetch }) => {

    const publicAxios = usePublicAxios();

    const [formData, setFormData] = useState({
        name: userData?.name || "",
        phone: userData?.phone || "",
        fatherName: userData?.fatherName || "",
        motherName: userData?.motherName || "",
        presentAddress: userData?.presentAddress || "",
        religion: userData?.religion || "",
        blood: userData?.blood || "",
        gender: userData?.gender || "",
        dob: userData?.dob || "",
        guardianName: userData?.guardianName || "",
        nid: userData?.nid || "",
    });

    const [photo, setPhoto] = useState(null);

    if (!open) return null;

    // handle change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let photoURL = userData?.photo;

        try {

            // upload new photo if selected
            if (photo) {
                const imageFile = { image: photo };

                const res = await publicAxios.post(
                    image_hosting_api,
                    imageFile,
                    {
                        headers: {
                            "content-type":
                                "multipart/form-data",
                        },
                    }
                );

                photoURL =
                    res?.data?.data?.display_url;
            }

            const updatedUser = {
                ...formData,
                photo: photoURL,
            };

            await publicAxios.patch(
                `/users/${userData?.email}`,
                updatedUser
            );

            toast.success("Profile Updated ✅");

            refetch?.();
            onClose();

        } catch (error) {
            console.error(error);
            toast.error("Update Failed ❌");
        }
    };

    return (
        <dialog className="modal modal-open">
            <div className="modal-box max-w-3xl">

                <h3 className="font-bold text-lg mb-4">
                    Update Profile
                </h3>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="Name"
                        />

                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="Phone"
                        />

                        <input
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="Father Name"
                        />

                        <input
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="Mother Name"
                        />

                        <input
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="Guardian Name"
                        />

                        <input
                            name="nid"
                            value={formData.nid}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            placeholder="NID"
                        />

                    </div>

                    <input
                        name="presentAddress"
                        value={formData.presentAddress}
                        onChange={handleChange}
                        className="input input-bordered w-full focus:outline-none"
                        placeholder="Present Address"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                            required
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>



                    <div className="grid grid-cols-2 gap-4">
                        <select
                            name="religion"
                            value={formData.religion}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none"
                        >
                            <option>Muslim</option>
                            <option>Hindhu</option>
                            <option>Boddho</option>
                            <option>Christians</option>
                        </select>

                        <select
                            name="blood"
                            value={formData.blood}
                            onChange={handleChange}
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

                    {/* Photo */}
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                        onChange={(e) =>
                            setPhoto(e.target.files[0])
                        }
                    />

                    {/* Actions */}
                    <div className="modal-action font-light">

                        <button className="btn bg-teal-400 text-black font-light">
                            Update
                        </button>

                        <button
                            type="button"
                            className="btn font-light"
                            onClick={onClose}
                        >
                            Close
                        </button>

                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default UpdateUserModal;

