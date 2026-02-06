import React from 'react';
import { Link } from 'react-router-dom';

const Batch = () => {
    return (
        <div>
            <div>
                <Link className='btn btn-primary' to={"/dashboard/add-batch"}>Add Batch</Link>
            </div>
        </div>
    );
};

export default Batch;