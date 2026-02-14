import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import useAllUser from "../../../Hook/useAllUser";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxios from "../../../Hook/useAxios";
ModuleRegistry.registerModules([AllCommunityModule]);


// image render
const PhotoRenderer = (params) => {
    return (
        <div className="avatar">
            <div className="w-10 rounded-full ring-2  ring-offset-2">
                <img src={params.value} />
            </div>
        </div>
    );
};

// rolerender

const RoleRenderer = (params) => {
    const role = params.value;

    return (
        <span
            className={`badge ${role === "admin" ? "badge-error" : "badge-success"
                }`}
        >
            {role}
        </span>
    );
};


// action render
const ActionRenderer = (props) => {
    const { data, onView, onDelete } = props;

    return (
        <div className="flex gap-2">
            <button
                className="btn btn-xs btn-info text-white"
                onClick={() => onView(data)}
            >
                View
            </button>

            <button
                className="btn btn-xs btn-warning"
                onClick={() => alert("Edit " + data.name)}
            >
                Edit
            </button>

            <button
                className="btn btn-xs btn-error text-white"
                onClick={() => onDelete(data.email)}
            >
                Delete
            </button>
        </div>
    );
};



const Students = () => {

    const [users,,refetch] = useAllUser()


    const axios = useAxios();

    const [selectedUser, setSelectedUser] = useState(null);

    // 👉 View
    const handleView = (user) => {
        setSelectedUser(user);
        document.getElementById("view_modal").showModal();
    };

    // 👉 Delete
    const handleDelete = (email) => {
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
                    const res = await axios.delete(`/users/${email}`);

                    if (res?.data) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User deleted successfully.",
                            icon: "success"
                        });

                        toast.success("User deleted successfully!");
                        refetch();
                    }

                } catch (error) {
                    console.error(error);

                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete user.",
                        icon: "error"
                    });
                }
            }

        });
    };

    // 👉 Columns
    const columnDefs = useMemo(
        () => [
            {
                headerName: "Photo",
                field: "photo",
                cellRenderer: PhotoRenderer,
                width: 110,
                cellClass: "flex items-center justify-center text-center",

            },
            { headerName: "Name", field: "name", cellClass: "flex items-center justify-center text-center", },
            { headerName: "Email", field: "email", cellClass: "flex items-center justify-center text-center", },
            { headerName: "Student ID", field: "studentId", width: 100, cellClass: "flex items-center justify-center text-center", },
            {
                headerName: "Role",
                field: "role",
                cellRenderer: RoleRenderer,
                width: 100,
                cellClass: "flex items-center justify-center text-center",
            },
            {
                headerName: "Actions",
                cellRenderer: (params) => (
                    <ActionRenderer
                        {...params}
                        onView={handleView}
                        onDelete={handleDelete}
                    />
                ),
                cellClass: "flex items-center justify-center text-center",

            },
        ],
        []
    );

    return (
        <div>
            <div className="">

                {/* PAGE TITLE */}
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">
                        👨‍💼 Admin User Management
                    </h2>
                    <p className="text-sm ">
                        Manage <span className="font-bold text-teal-100">{users?.length}</span> Mart Academy users
                    </p>
                </div>

                {/* GRID CARD */}
                <div
                    className="ag-theme-alpine  text-center w-full h-screen"

                >
                    <AgGridReact
                        rowData={users}
                        columnDefs={columnDefs}
                        rowHeight={55}
                        pagination={true}
                        paginationPageSize={20}
                        defaultColDef={{
                            sortable: true,
                            filter: true,
                            resizable: true,
                            floatingFilter: true
                        }}

                    />
                </div>

                {/* VIEW MODAL */}
                <dialog id="view_modal" className="modal modal-middle">
                    <div className="modal-box max-w-3xl">

                        {selectedUser && (
                            <>
                                <h3 className="font-bold text-lg mb-4">
                                    User Details
                                </h3>

                                <div className="flex flex-col lg:flex-row gap-5 font-light">

                                    {/* Profile Photo */}
                                    <div className="flex flex-col items-center gap-4">
                                        <img
                                            src={selectedUser?.photo}
                                            alt="student"
                                            className="w-20 h-20 rounded-full object-cover ring ring-teal-300 ring-offset-2"
                                        />

                                        <p className="font-semibold">
                                            STU - {selectedUser?.studentId}
                                        </p>

                                        <span className="badge badge-outline border-teal-300">
                                            {selectedUser?.role}
                                        </span>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1 text-sm">

                                        <p>
                                            <strong className="text-teal-400">Name : </strong>
                                            {selectedUser?.name}
                                        </p>

                                        <p>
                                            <strong className="text-teal-400">Email : </strong>
                                            {selectedUser?.email}
                                        </p>

                                        <p>
                                            <strong>Father Name : </strong>
                                            {selectedUser?.fatherName}
                                        </p>

                                        <p>
                                            <strong>Mother Name : </strong>
                                            {selectedUser?.motherName}
                                        </p>

                                        <p>
                                            <strong>Date of Birth : </strong>
                                            {selectedUser?.dob}
                                        </p>

                                        <p>
                                            <strong>Gender : </strong>
                                            {selectedUser?.gender}
                                        </p>

                                        <p>
                                            <strong>Blood Group : </strong>
                                            {selectedUser?.blood}
                                        </p>

                                        <p>
                                            <strong>Religion : </strong>
                                            {selectedUser?.religion}
                                        </p>

                                        <p>
                                            <strong>Phone : </strong>
                                            {selectedUser?.phone}
                                        </p>

                                        <p>
                                            <strong>Guardian : </strong>
                                            {selectedUser?.guardianName}
                                        </p>

                                        <p>
                                            <strong>NID / Birth Cert : </strong>
                                            {selectedUser?.nid}
                                        </p>

                                        <p>
                                            <strong>Present Address : </strong>
                                            {selectedUser?.presentAddress}
                                        </p>

                                        <p>
                                            <strong>Account Created : </strong>
                                            {new Date(selectedUser?.createdAt).toLocaleDateString()}
                                        </p>

                                    </div>
                                </div>
                            </>
                        )}

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>

                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Students;