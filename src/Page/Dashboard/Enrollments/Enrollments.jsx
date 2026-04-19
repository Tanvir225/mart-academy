import { useEffect, useState, useMemo } from "react";
import { AllCommunityModule, ModuleRegistry, QuickFilterModule } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import useEnrollments from "../../../Hook/useEnrollments";
import useAxios from "../../../Hook/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

ModuleRegistry.registerModules([AllCommunityModule]);

const Enrollments = () => {
    const [enrolls, ,refetch] = useEnrollments();
    const [search, setSearch] = useState("");
    const [rowData, setRowData] = useState([]);
    const [selected, setSelected] = useState(null);

    const axios = useAxios();

    // ✅ sync hook data
    useEffect(() => {
        setRowData(enrolls);
    }, [enrolls]);

    // ✅ update
    const handleUpdate = async (id, field, value) => {
        try {
            const res = await axios.patch(`/enrolls/${id}`, {
                [field]: value,
            });

            // ✅ check API success
            if (res.data?.success && res.data?.result?.modifiedCount > 0) {
                setRowData((prev) =>
                    prev.map((row) =>
                        row._id === id ? { ...row, [field]: value } : row
                    )
                );
                toast.success("Updated successfully");
            } else {
                toast.error(res.data?.message || "Update failed");
            }

        } catch (error) {
            console.error("Update error:", error);
            toast.error("An error occurred while updating");
        }
    };

    // ✅ delete
    const handleDelete = (id) => {
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
                    const res = await axios.delete(`/enrolls/${id}`);

                    if (res?.data) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Enrollment deleted successfully.",
                            icon: "success"
                        });

                        toast.success("Enrollment deleted successfully!");
                        refetch();
                    }

                } catch (error) {
                    console.error(error);

                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete enrollment.",
                        icon: "error"
                    });
                }
            }

        });
    };

    // ✅ status color
    const StatusRenderer = (props) => {
        const color =
            props.value === "approved"
                ? "bg-green-600"
                : props.value === "rejected"
                    ? "bg-red-600"
                    : "bg-yellow-500";

        return (
            <select
                className={`select text-white ${color}`}
                value={props.value}
                onChange={(e) =>
                    handleUpdate(props.data._id, "status", e.target.value)
                }
            >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>
        );
    };

    // ✅ payment fixed
    const PaymentRenderer = (props) => {

        const color =
            props.value === "paid"
                ? "bg-green-600"
                : props.value === "failed"
                    ? "bg-red-600"
                    : "bg-yellow-500";
        return (
            <select
                className={`select text-white ${color}`}
                value={props.value}
                onChange={(e) =>
                    handleUpdate(props.data._id, "paymentStatus", e.target.value)
                }
            >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="failed">Failed</option>
            </select>
        );
    };

    // ✅ action buttons
    const ActionRenderer = (props) => {
        return (
            <div className="flex gap-2">
                <button
                    className="btn btn-xs btn-info"
                    onClick={() => setSelected(props.data)}
                >
                    View
                </button>
                <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(props.data._id)}
                >
                    Delete
                </button>
            </div>
        );
    };

    const columnDefs = useMemo(
        () => [
            { headerName: "Name", field: "studentName" },
            { headerName: "Email", field: "studentEmail" },
            { headerName: "Course", field: "courseTitle" },
            { headerName: "Batch", field: "batchName" },
            { headerName: "Amount", field: "amount" },
            { headerName: "Payment", field: "paymentMethod" },
            { headerName: "Status", field: "status", cellRenderer: StatusRenderer },
            {
                headerName: "Payment Status",
                field: "paymentStatus",
                cellRenderer: PaymentRenderer,
            },
            { headerName: "Actions", cellRenderer: ActionRenderer },
        ],
        []
    );

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        floatingFilter: true,
        resizable: true,
        cellClass: "flex items-center justify-center p-5", // 🔥 important
    }), []);

    // ✅ filtering now uses rowData
    const filteredData = rowData?.filter((item) =>
        item.studentEmail.toLowerCase().includes(search.toLowerCase()) ||
        item.studentName.toLowerCase().includes(search.toLowerCase()) ||
        item.courseTitle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-xl font-thin mb-2">Enrolled {enrolls?.length} <sub className="text-teal-200">person</sub></h1>

            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full mb-4 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="ag-theme-alpine h-screen w-full text-center">
                <AgGridReact
                    rowData={filteredData}
                    rowHeight={60}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={20}
                />
            </div>

            {/* ✅ Modal */}
            {selected && (
                <div className="fixed inset-0 text-white flex justify-center items-center">
                    <div className="bg-base-200 font-thin text-sm space-y-2 p-6 rounded-xl w-[400px]">
                        <h2 className="mb-3">Details</h2>
                        <p><b>Name:</b> {selected?.studentName}</p>
                        <p><b>Email:</b> {selected?.studentEmail}</p>
                        <p><b>Course:</b> {selected?.courseTitle}</p>
                        <p><b>Batch:</b> {selected?.batchName}</p>
                        <p><b>Fees:</b> {selected?.amount}</p>
                        <p><b>Method:</b> {selected?.paymentMethod} || {selected?.transactionId}</p>
                        <p><b>Coupon Code:</b> {selected?.couponCode || "N/A"} || {selected?.discountAmount}</p>
                        <p><b>Sender Number:</b> {selected?.senderNumber || "N/A"}</p>
                        <p><b>Status:</b> {selected?.status} || {selected?.paymentStatus}</p>
                        <p><b>Enrolled:</b> {Date(selected?.enrolledAt.toLocaleString())}</p>

                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => setSelected(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Enrollments;