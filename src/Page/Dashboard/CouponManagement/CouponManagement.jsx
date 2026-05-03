import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import useAxios from "../../../Hook/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useCoupons from "../../../Hook/useCoupons";

ModuleRegistry.registerModules([AllCommunityModule]);

const CouponManagement = () => {
    const axios = useAxios();

    // ✅ Single source of truth from React Query
    const [coupons = [], isLoading, refetch] = useCoupons();

    const [search, setSearch] = useState("");
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    // ========================================
    // Add Coupon
    // ========================================
    const handleAddCoupon = async (e) => {
        e.preventDefault();

        const form = e.target;

        const newCoupon = {
            code: form.code.value.toUpperCase(),
            discountType: form.discountType.value,
            discountValue: Number(form.discountValue.value),
            expireDate: form.expireDate.value,
            maxUse: Number(form.maxUse.value),
            status: form.status.value,
        };

        try {
            const res = await axios.post("/coupons", newCoupon);

            if (res?.data?.message) {
                toast.error(res.data.message);
                return;
            }

            toast.success("Coupon added successfully!");

            await refetch();

            form.reset();
            document.getElementById("coupon_modal1").close();
        } catch (error) {
            console.log(error);
            toast.error("Failed to add coupon");
        }
    };

    // ========================================
    // Delete Coupon
    // ========================================
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`/coupons/${id}`);

                    if (res?.data) {
                        await refetch();

                        Swal.fire({
                            title: "Deleted!",
                            text: "Coupon deleted successfully.",
                            icon: "success",
                        });

                        toast.success("Coupon deleted successfully!");
                    }
                } catch (error) {
                    console.log(error);

                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete coupon.",
                        icon: "error",
                    });
                }
            }
        });
    };

    // ========================================
    // Update Coupon
    // ========================================
    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedCoupon = {
            code: form.code.value.toUpperCase(),
            discountType: form.discountType.value,
            discountValue: Number(form.discountValue.value),
            expireDate: form.expireDate.value,
            maxUse: Number(form.maxUse.value),
            status: form.status.value,
        };

        try {
            const res = await axios.patch(
                `/coupons/${selectedCoupon._id}`,
                updatedCoupon
            );

            await refetch();

            document.getElementById("coupon_modal").close();
            setSelectedCoupon(null);

            toast.success(res?.data?.message || "Coupon updated successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to update coupon");
        }
    };

    // ========================================
    // Action Buttons Renderer
    // ========================================
    const ActionRenderer = (props) => {
        return (
            <div className="flex justify-center items-center gap-2 h-full">
                <button
                    className="btn btn-sm btn-info"
                    onClick={() => {
                        setSelectedCoupon(props.data);
                        document.getElementById("coupon_modal").showModal();
                    }}
                >
                    Edit
                </button>

                <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(props.data._id)}
                >
                    Delete
                </button>
            </div>
        );
    };

    // ========================================
    // AG Grid Columns
    // ========================================
    const columnDefs = useMemo(
        () => [
            {
                headerName: "Coupon Code",
                field: "code",
                flex: 1,
            },
            {
                headerName: "Discount Type",
                field: "discountType",
                flex: 1,
            },
            {
                headerName: "Discount Value",
                field: "discountValue",
                flex: 1,
            },
            {
                headerName: "Expire Date",
                field: "expireDate",
                flex: 1,
            },
            {
                headerName: "Max Use",
                field: "maxUse",
                flex: 1,
            },
            {
                headerName: "Used Count",
                field: "usedCount",
                flex: 1,
            },
            {
                headerName: "Status",
                field: "status",
                flex: 1,
            },
            {
                headerName: "Action",
                field: "action",
                cellRenderer: ActionRenderer,
                flex: 1.5,
            },
        ],
        []
    );

    // ========================================
    // Search Filter
    // ========================================
    const filteredData = coupons.filter((item) =>
        item.code.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="text-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            {/* Header */}
            <section className="flex justify-between items-center mb-5">
                <h1 className="text-3xl font-bold">
                    Coupon Management
                </h1>

                <button
                    className="btn bg-teal-200 text-black border-0 font-thin"
                    onClick={() => {
                        document.getElementById("coupon_modal1").showModal();
                    }}
                >
                    Add Coupon
                </button>
            </section>

            {/* Search */}
            <input
                type="text"
                placeholder="Search coupon code..."
                className="input input-bordered w-full mb-5"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* AG Grid */}
            <div
                className="ag-theme-alpine w-full"
                style={{ height: "600px" }}
            >
                <AgGridReact
                    rowData={filteredData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={10}
                    rowHeight={65}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true,
                    }}
                />
            </div>

            {/* ======================================== */}
            {/* Edit Modal */}
            {/* ======================================== */}
            <dialog id="coupon_modal" className="modal">
                <div className="modal-box max-w-2xl">
                    <h3 className="font-bold text-xl mb-4">
                        Edit Coupon
                    </h3>

                    {selectedCoupon && (
                        <form
                            onSubmit={handleUpdate}
                            className="space-y-4"
                        >
                            <input
                                name="code"
                                defaultValue={selectedCoupon.code}
                                className="input input-bordered w-full"
                                placeholder="Coupon Code"
                                required
                            />

                            <select
                                name="discountType"
                                defaultValue={selectedCoupon.discountType}
                                className="select select-bordered w-full"
                            >
                                <option value="percentage">
                                    Percentage
                                </option>
                                <option value="fixed">
                                    Fixed
                                </option>
                            </select>

                            <input
                                name="discountValue"
                                type="number"
                                defaultValue={selectedCoupon.discountValue}
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                name="expireDate"
                                type="date"
                                defaultValue={selectedCoupon.expireDate}
                                className="input input-bordered w-full"
                                required
                            />

                            <input
                                name="maxUse"
                                type="number"
                                defaultValue={selectedCoupon.maxUse}
                                className="input input-bordered w-full"
                                required
                            />

                            <select
                                name="status"
                                defaultValue={selectedCoupon.status}
                                className="select select-bordered w-full"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>

                            <button
                                type="submit"
                                className="btn btn-primary font-thin"
                            >
                                Update Coupon
                            </button>
                            <button
                                className="btn btn-secondary ml-2 font-thin"
                                onClick={() => {
                                    document.getElementById("coupon_modal").close();
                                    setSelectedCoupon(null);
                                }}
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>
            </dialog>

            {/* ======================================== */}
            {/* Add Modal */}
            {/* ======================================== */}
            <dialog id="coupon_modal1" className="modal">
                <div className="modal-box max-w-2xl">
                    <h3 className="font-bold text-xl mb-4">
                        Add Coupon
                    </h3>

                    <form
                        onSubmit={handleAddCoupon}
                        className="space-y-4 "
                    >
                        <input
                            name="code"
                            className="input input-bordered w-full"
                            placeholder="Coupon Code"
                            required
                        />

                        <select
                            name="discountType"
                            className="select select-bordered w-full"
                        >
                            <option value="percentage">
                                Percentage
                            </option>
                            <option value="fixed">
                                Fixed
                            </option>
                        </select>

                        <input
                            name="discountValue"
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Discount Value"
                            required
                        />

                        <input
                            name="expireDate"
                            type="date"
                            className="input input-bordered w-full"
                            required
                        />

                        <input
                            name="maxUse"
                            type="number"
                            className="input input-bordered w-full"
                            placeholder="Max Use"
                            required
                        />

                        <select
                            name="status"
                            className="select select-bordered w-full"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <button
                            type="submit"
                            className="btn btn-primary font-thin"
                        >
                            Add Coupon
                        </button>
                        <button
                            type="submit"
                            className="btn btn-secondary font-thin ml-2"
                            onClick={() => document.getElementById("coupon_modal1").close()}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default CouponManagement;