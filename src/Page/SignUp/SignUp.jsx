import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import usePublicAxios from '../../Hook/usePublicAxios';
import toast from 'react-hot-toast';
import { sendEmailVerification, signOut, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const SignUp = () => {

    //useContext
    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    //useAxios hook

    const publicAxios = usePublicAxios();   

    //navigate
    const navigate = useNavigate();
    //location
    // const location = useLocation();

    // let from = location?.state?.from?.pathname || "/";

    //image hosting key & api
    const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("sign up ...");
        const forms = e.target;
        const email = forms.email.value;
        const name = forms.name.value;
        const photo = forms.photo.files[0];
        const password = forms.password.value;
        const address = forms.address.value;
        const phone = forms.phone.value;

        //student id
        const studentId = uuidv4().slice(0, 8).toUpperCase();

        // image upload functionality
        const imageFile = { image: photo };
        // console.log(imageFile);
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: { "content-Type": "multipart/form-data" },
        });



        //console.log(email, name, photo, password);
        //signup functionality
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                forms.reset();
                //updateprofile
                updateProfile(user, {
                    displayName: name,
                    photoURL: res?.data?.data?.display_url || "https://i.ibb.co.com/TM6jBG7h/user-photo.jpg",
                });

                //send to database user information
                const dataUser = {
                    name: name,
                    email: email,
                    photo: res?.data?.data?.display_url || "https://i.ibb.co.com/TM6jBG7h/user-photo.jpg",
                    address: address,
                    phone: phone,
                    studentId: studentId,
                    role: "student",
                    logged: user?.metadata?.lastSignInTime,
                };

                // console.log(dataUser);

                //api call
                publicAxios.post("/users", dataUser).then((result) => {
                    console.log(result.data);
                });



                // ✅ Send Email Verification
                sendEmailVerification(user)
                    .then(() => {
                        toast.success("Verification email sent. Please check your inbox.", { id: toastId });
                        // ✅ Navigate to verification page
                        navigate("/verify-email");
                    })
                    .catch((err) => {
                        toast.error("Failed to send verification email.", { id: toastId });
                        console.error(err);
                    });

                // 🚨 Block unverified users
                if (!user.emailVerified) {
                    signOut(auth).then(() => {

                    });

                    return;
                }



                // toast.success("signed up", { id: toastId });
                // navigate("/");
            })
            .catch((error) => {
                toast.error(error.message.slice(10, error.message.length), {
                    id: toastId,
                });
            });
    };


    return (
        <section className='my-10'>

            <div className="w-full max-w-2xl mx-auto  space-y-3  rounded-lg border p-5 shadow-lg ">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                    <p className="text-sm text-zinc-200 ">Please fill in the form to create an account.</p>
                </div>
                <div>
                    <form className="space-y-5 " onSubmit={handleSubmit}>
                        <div className="">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none  " htmlFor="first_name">
                                    Enter your Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none"
                                    id="name"
                                    placeholder="Enter your name"
                                    name="name"
                                    type="text"
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none  " htmlFor="first_name">
                                    Phone
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none "
                                    id="phone"
                                    placeholder="+880 17 --"
                                    name="phone"
                                    type="tel"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none  " htmlFor="last_name">
                                    Address
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none"
                                    id="address"
                                    placeholder="Enter your address"
                                    name="address"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none  " htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none "
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                type="email"
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className="space-y-2 text-sm relative">
                                <label className="text-sm font-medium leading-none  " htmlFor="password_">
                                    Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none "
                                    id="password_"
                                    placeholder="password"
                                    name="password"
                                    type={`${showPassword ? 'text' : 'password'}`}
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[35%] right-2 cursor-pointer">{showPassword ? <FiEyeOff></FiEyeOff> : <FiEye></FiEye>}</span>
                            </div>

                            <fieldset className="fieldset mt-1">
                                <legend className="text-sm">Upload your image</legend>
                                <input name='photo' type="file" className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none " />
                                <label className="">Max size 2MB</label>
                            </fieldset>
                        </div>


                        <button className="rounded-md bg-teal-500 px-4 py-2 text-white transition-colors hover:bg-teal-600">Submit</button>
                    </form>
                </div>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Already have an account?
                    <Link to={'/login'} className="ml-1 text-teal-200">
                        Signin
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SignUp;