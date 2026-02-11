import React, { useState } from "react";
import useAxios from "../../../Hook/useAxios";
import toast from "react-hot-toast";


const UpdateCourseModal = ({ course, isOpen, onClose,refetch }) => {
  const [formData, setFormData] = useState(course);
  const axios = useAxios()

  if (!course) return null;

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // summary change
  const handleSummaryChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      summary: {
        ...formData.summary,
        [name]: value,
      },
    });
  };

  // module change
  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...formData.modules];
    updatedModules[index][field] = value;
    setFormData({ ...formData, modules: updatedModules });
  };

  // skill change
  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...formData.skill];
    updatedSkills[index][field] = value;
    setFormData({ ...formData, skill: updatedSkills });
  };

  // update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.patch(`/courses/${course._id}`, formData);
      toast.success("Course Updated ✅")
      refetch()
      onClose();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box max-w-5xl">

        <h3 className="font-bold text-xl mb-4">
          Update Course
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Course Title"
            className="input input-bordered focus:outline-none w-full"
          />

          {/* Subtitle */}
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Subtitle"
            className="input input-bordered focus:outline-none w-full"
          />

          {/* Thumbnail */}
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            className="input input-bordered focus:outline-none w-full"
          />

          {/* Intro Video */}
          <input
            type="text"
            name="introVideo"
            value={formData.introVideo}
            onChange={handleChange}
            placeholder="Intro Video URL"
            className="input input-bordered focus:outline-none w-full"
          />

          {/* Description */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered focus:outline-none w-full"
            placeholder="Description"
          />

          {/* Summary Section */}
          <div className="grid grid-cols-2 gap-4">

            <input
              type="number"
              name="modules"
              value={formData.summary.modules}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
              placeholder="Modules"
            />

            <input
              type="number"
              name="duration"
              value={formData.summary.duration}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
              placeholder="Duration"
            />

            <input
              type="number"
              name="projects"
              value={formData.summary.projects}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
              placeholder="Projects"
            />

            <input
              type="date"
              name="batchEnd"
              value={formData.summary.batchEnd}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
            />

            <input
              type="date"
              name="admissionStart"
              value={formData.summary.admissionStart}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
            />

            <input
              type="date"
              name="newBatch"
              value={formData.summary.newBatch}
              onChange={handleSummaryChange}
              className="input input-bordered focus:outline-none"
            />
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold mb-2">Skills</h4>

            {formData.skill.map((skill, i) => (
              <div key={i} className="grid grid-cols-3 gap-2 mb-2">

                <input
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(i, "name", e.target.value)
                  }
                  className="input input-bordered focus:outline-none"
                  placeholder="Skill Name"
                />

                <input
                  value={skill.bg}
                  onChange={(e) =>
                    handleSkillChange(i, "bg", e.target.value)
                  }
                  className="input input-bordered focus:outline-none"
                  placeholder="BG Class"
                />

                <input
                  value={skill.text}
                  onChange={(e) =>
                    handleSkillChange(i, "text", e.target.value)
                  }
                  className="input input-bordered focus:outline-none"
                  placeholder="Text Class"
                />
              </div>
            ))}
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-semibold mb-2">
              Modules
            </h4>

            <div className="max-h-60 overflow-y-auto space-y-2">

              {formData.modules.map((mod, i) => (
                <div key={i} className="border p-2 rounded">

                  <input
                    value={mod.title}
                    onChange={(e) =>
                      handleModuleChange(
                        i,
                        "title",
                        e.target.value
                      )
                    }
                    className="input input-bordered focus:outline-none w-full mb-2"
                    placeholder="Module Title"
                  />

                  <textarea
                    value={mod.description}
                    onChange={(e) =>
                      handleModuleChange(
                        i,
                        "description",
                        e.target.value
                      )
                    }
                    className="textarea textarea-bordered focus:outline-none w-full"
                    placeholder="Module Description"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="modal-action">
            <button className="btn bg-teal-300 text-black font-light">
              Update Course
            </button>

            <button
              type="button"
              className="btn btn-error font-light"
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

export default UpdateCourseModal;
