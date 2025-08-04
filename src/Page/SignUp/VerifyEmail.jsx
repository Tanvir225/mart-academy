import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <div className="min-h-[80vh] space-y-5 flex flex-col items-center justify-center ">
            <h2 className="text-3xl font-bold text-center text-teal-300">Verify Your Email</h2>
            <p className="mt-4 text-center text-white max-w-md">
                We’ve sent you a verification <span className='text-teal-200'>email</span>. Please check your <span className='text-teal-200'>inbox</span> and follow the link to <span className='text-teal-200'>activate</span> or <span className='text-teal-200'>login</span> your account.
            </p>
            <Link to={"/"} className='btn btn-outline border-teal-200'>Home</Link>
        </div>
    );
};

export default VerifyEmail;