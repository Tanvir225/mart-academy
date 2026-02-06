import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import useAllUser from "../../../Hook/useAllUser";
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
                onClick={() => onDelete(data._id)}
            >
                Delete
            </button>
        </div>
    );
};



const Students = () => {

    const [users] = useAllUser()



    const [selectedUser, setSelectedUser] = useState(null);

    // 👉 View
    const handleView = (user) => {
        setSelectedUser(user);
        document.getElementById("view_modal").showModal();
    };

    // 👉 Delete
    const handleDelete = (id) => {
        console.log(id);
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
                <dialog id="view_modal" className="modal">
                    <div className="modal-box">

                        {selectedUser && (
                            <>
                                <h3 className="font-bold text-lg mb-4">
                                    User Details
                                </h3>

                                <div className="flex flex-col items-center gap-3">

                                    <div className="avatar">
                                        <div className="w-20 rounded-full">
                                            <img src={selectedUser.photo} />
                                        </div>
                                    </div>

                                    <p><b>Name:</b> {selectedUser.name}</p>
                                    <p><b>Email:</b> {selectedUser.email}</p>
                                    <p><b>Student ID:</b> {selectedUser.studentId}</p>
                                    <p><b>Role:</b> {selectedUser.role}</p>
                                    <p><b>Phone:</b> {selectedUser.phone || "N/A"}</p>
                                    <p><b>Address:</b> {selectedUser.address || "N/A"}</p>
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