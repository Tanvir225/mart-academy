import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewBatchModal from '../../../Component/Dashboard/Batch/ViewBatchModal';
import UpdateBatchModal from '../../../Component/Dashboard/Batch/UpdateBatchModal';
import useBatches from '../../../Hook/useBatches';
import useAxios from '../../../Hook/useAxios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Batch = () => {

    const [batches, isLoading, refetch] = useBatches();
    const axios = useAxios()
    const [selectedBatch, setSelectedBatch] = useState({});


    const [viewOpen, setViewOpen] = useState(false);

    const [updateOpen, setUpdateOpen] = useState(false);

    if (isLoading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    const handleDelete = (batchId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {

            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`/batches/${batchId}`);

                    if (res?.data) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Batch deleted successfully.",
                            icon: "success"
                        });

                        toast.success("Batch deleted successfully!");
                        refetch();
                    }

                } catch (error) {
                    console.error(error);

                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete batch.",
                        icon: "error"
                    });
                }
            }

        });
    };


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
                                    {batch.courseName}
                                </p>

                                <p>
                                    📅 Start: {batch.startDate}
                                </p>

                                <p>
                                    📦 Modules: {batch.modules.length}
                                </p>
                                <p>
                                    💺 Seat: {batch?.seat || "0"}
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
                                    <button onClick={() => handleDelete(batch?._id)} className="btn btn-sm btn-error">
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
                        onClose={() => {
                            setUpdateOpen(false);
                            refetch();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Batch;

