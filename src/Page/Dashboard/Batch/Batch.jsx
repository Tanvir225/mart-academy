import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewBatchModal from '../../../Component/Dashboard/Batch/ViewBatchModal';
import UpdateBatchModal from '../../../Component/Dashboard/Batch/UpdateBatchModal';

const Batch = () => {

    const [batches, setBatches] = useState(fakeData);
    const [selectedBatch, setSelectedBatch] = useState({});
   

    const [viewOpen, setViewOpen] = useState(false);

    const [updateOpen, setUpdateOpen] = useState(false);

    return (
        <div>
            <div className='flex items-center justify-between border-b-2 p-2'>
                <p to={"/"} className="text-xs sm:text-xl md:text-xl lg:text-xl">
                    MART-<span className="text-teal-300 font-bold">ACADEMY</span>
                </p>
                <Link className='btn bg-teal-200 text-black font-light' to={"/dashboard/add-batch"}>Add Batch</Link>
            </div>

            <div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {batches?.map((batch) => (
                        <div
                            key={batch._id}
                            className="card bg-base-100 shadow-xl border"
                        >
                            <div className="card-body">

                                <h2 className="card-title">
                                    {batch.batchName}
                                </h2>

                                <p className="text-sm opacity-70">
                                    {batch.courseTitle}
                                </p>

                                <p>
                                    📅 Start: {batch.startDate}
                                </p>

                                <p>
                                    📦 Modules: {batch.modules.length}
                                </p>

                                <div className="card-actions justify-end mt-4">

                                    {/* View */}
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => {
                                            setSelectedBatch(batch);
                                            setViewOpen(true);
                                        }}
                                    >
                                        View
                                    </button>

                                    {/* Update */}
                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() => {
                                            setSelectedBatch(batch);
                                            setUpdateOpen(true);
                                        }}
                                    >
                                        Update
                                    </button>

                                    {/* Delete */}
                                    <button className="btn btn-sm btn-error">
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Modals */}
                    <ViewBatchModal
                        batch={selectedBatch}
                        open={viewOpen}
                        onClose={() => setViewOpen(false)}
                    />

                    <UpdateBatchModal
                        batch={selectedBatch}
                        open={updateOpen}
                        onClose={() => setUpdateOpen(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Batch;


// fake data
const fakeData = [
    {
        "_id": "BATCH001",
        "courseId": "68a44cf687ac66b203487620",
        "courseTitle": "Computer Skills for Everyday Life",
        "batchName": "Batch 01",
        "startDate": "2025-02-01",
        "modules": [
            {
                "moduleId": 1,
                "liveClass": "zoom link",
                "recordedClass": "drive link",
                "assignment": "docs link",
                "exam": "form link"
            }
        ]
    }
]
