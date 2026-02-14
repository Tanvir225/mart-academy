const ViewBatchModal = ({ batch, open, onClose }) => {
    if (!batch) return null;
    console.log(batch);

    return (
        <dialog
            className={`modal ${open ? "modal-open" : ""
                }`}
        >
            <div className="modal-box max-w-4xl">

                <h3 className="font-bold text-lg">
                    {batch?.batchName}
                </h3>

                <p className="mb-4">
                    Course: {batch?.courseName} | Seat : {batch?.seat || "0"}
                </p>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>Module</th>
                                <th>Live</th>
                                <th>Recorded</th>
                                <th>Assignment</th>
                                <th>Exam</th>
                            </tr>
                        </thead>

                        <tbody>
                            {batch?.modules?.map((m, i) => (
                                <tr key={i}>
                                    <td>{m.moduleId}</td>
                                    <td>{m.liveClass}</td>
                                    <td>{m.recordedClass}</td>
                                    <td>{m.assignment}</td>
                                    <td>{m.exam}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                <div className="modal-action">
                    <button
                        className="btn"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ViewBatchModal;
