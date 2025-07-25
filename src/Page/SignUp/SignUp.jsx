import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section className='my-10'>
         
            <div className="w-full max-w-2xl mx-auto  space-y-3  rounded-lg border p-5 shadow-lg ">
                <div className="flex flex-col space-y-3">
                    <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                    <p className="text-sm text-zinc-200 ">Please fill in the form to create an account.</p>
                </div>
                <div>
                    <form className="space-y-5 ">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none  " htmlFor="first_name">
                                    First Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none"
                                    id="first_name"
                                    placeholder="Enter first name"
                                    name="first_name"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none " htmlFor="last_name">
                                    Last Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none "
                                    id="last_name"
                                    placeholder="Enter last name"
                                    name="last_name"
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
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none  " htmlFor="password_">
                                    Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none "
                                    id="password_"
                                    placeholder="password"
                                    name="password"
                                    type="password"
                                />
                            </div>

                            <fieldset className="fieldset">
                                <legend className="text-sm">Upload your image</legend>
                                <input type="file" className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none " />
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