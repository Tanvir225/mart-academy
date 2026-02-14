import { useEffect, useState } from "react";
import useAxios from "../../../Hook/useAxios";
import toast from "react-hot-toast";


const UpdateBatchModal = ({
  batch,
  open,
  onClose,
}) => {

  const axios = useAxios()

  const [formData, setFormData] =
    useState(null);

  // 🔁 Sync when batch changes
  useEffect(() => {
    if (batch) {
      setFormData(batch);
    }
  }, [batch]);

  // 🛑 Guard
  if (!open || !formData) return null;

  // Module field change
  const handleChange = (
    index,
    field,
    value
  ) => {
    const updatedModules = [
      ...formData.modules,
    ];

    updatedModules[index][field] = value;

    setFormData({
      ...formData,
      modules: updatedModules,
    });
  };


  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.patch(
      `/batches/${batch._id}`,
      formData
    );

    toast.success("Batch Updated ✅");
    onClose();
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-5xl">

        <h3 className="font-bold text-lg">
          Update {formData.batchName}
        </h3>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Batch Name */}
          <input
            className="input input-bordered w-full"
            value={formData.batchName}
            onChange={(e) =>
              setFormData({
                ...formData,
                batchName: e.target.value,
              })
            }
          />

          {/* Start Date */}
          <input
            type="date"
            className="input input-bordered w-full focus:outline-none"
            value={formData.startDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                startDate: e.target.value,
              })
            }
          />
          {/* seat */}
          <input
            type="number"
            className="input w-1/2 input-bordered  focus:outline-none"
            value={formData.seat}
            placeholder="seat"
            onChange={(e) =>
              setFormData({
                ...formData,
                seat: parseInt(e.target.value),
              })

            }
          />

          {/* Modules Table */}
          <div className="max-h-80 overflow-y-auto">

            <table className="table">

              <thead>
                <tr>
                  <th>Module</th>
                  <th>Live</th>
                  <th>Recorded</th>
                  <th>Assignment</th>
                  <th>Exam</th>
                  <th>Contest</th>
                </tr>
              </thead>

              <tbody>
                {formData.modules?.map(
                  (m, i) => (
                    <tr key={i}>

                      <td>
                        {m.moduleId}
                      </td>

                      <td>
                        <input
                          className="input input-sm input-bordered focus:outline-none"
                          value={
                            m.liveClass || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              i,
                              "liveClass",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="input input-sm input-bordered focus:outline-none"
                          value={
                            m.recordedClass ||
                            ""
                          }
                          onChange={(e) =>
                            handleChange(
                              i,
                              "recordedClass",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="input input-sm input-bordered focus:outline-none"
                          value={
                            m.assignment || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              i,
                              "assignment",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="input input-sm input-bordered focus:outline-none"
                          value={
                            m.exam || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              i,
                              "exam",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          className="input input-sm input-bordered focus:outline-none"
                          value={
                            m.contest || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              i,
                              "contest",
                              e.target.value
                            )
                          }
                        />
                      </td>

                    </tr>
                  )
                )}
              </tbody>

            </table>
          </div>

          {/* Actions */}
          <div className="modal-action">

            <button className="btn btn-primary">
              Update
            </button>

            <button
              type="button"
              className="btn"
              onClick={onClose}
            >
              Close
            </button>

          </div>

        </form>
      </div>
    </dialog>
  );
};

export default UpdateBatchModal;
