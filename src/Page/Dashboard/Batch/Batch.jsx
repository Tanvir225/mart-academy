import React from 'react';
import { Link } from 'react-router-dom';

const Batch = () => {
    return (
        <div>
            <div className='flex items-center justify-between border-b-2 p-2'>
                <p to={"/"} className="text-xs sm:text-xl md:text-xl lg:text-xl">
                    MART-<span className="text-teal-300 font-bold">ACADEMY</span>
                </p>
                <Link className='btn bg-teal-200 text-black font-light' to={"/dashboard/add-batch"}>Add Batch</Link>
            </div>
        </div>
    );
};

export default Batch;