import {useState } from "react";
import useCourses from "../../../Hook/useCourses";

const AddBatch = () => {
    const [courses] = useCourses() 
    const [selectedCourseId, setSelectedCourseId] =
        useState("");

    const [selectedCourse, setSelectedCourse] =
        useState(null);

    const [modules, setModules] = useState([]);

    const [batchName, setBatchName] = useState("");
    const [startDate, setStartDate] = useState("");

   

    // When course change
    const handleCourseChange = (id) => {
        setSelectedCourseId(id);

        const course = courses.find(
            (c) => c._id === id
        );

        setSelectedCourse(course);

        // Create empty module links
        const moduleLinks = course.modules.map(
            (m) => ({
                moduleId: m.module,
                liveClass: "",
                recordedClass: "",
                assignment: "",
                exam: "",
                contest: "",
            })
        );

        setModules(moduleLinks);
    };

    // Handle link change
    const handleChange = (index, field, value) => {
        const updated = [...modules];
        updated[index][field] = value;
        setModules(updated);
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const batchData = {
            courseId: selectedCourseId,
            batchName,
            startDate,
            modules,
        };

        console.log(batchData);
    };

    return (
        <div className="p-4 space-y-5">

            <h2 className="text-2xl font-bold">
                ➕ Add Batch
            </h2>

            {/* Select Course */}
            <select
                className="select select-bordered w-full focus:outline-none"
                onChange={(e) =>
                    handleCourseChange(e.target.value)
                }
            >
                <option>Select Course</option>

                {courses?.map((course) => (
                    <option
                        key={course._id}
                        value={course._id}
                    >
                        {course.title}
                    </option>
                ))}
            </select>

            {/* Batch Info */}
            {selectedCourse && (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            placeholder="Batch Name"
                            className="input input-bordered focus:outline-none"
                            onChange={(e) =>
                                setBatchName(e.target.value)
                            }
                        />

                        <input
                            type="date"
                            className="input input-bordered focus:outline-none"
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                        />
                    </div>

                    {/* Modules */}
                    <div className="overflow-x-auto w-full">

                        <table className="table table-zebra w-full">

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
                                {selectedCourse.modules?.map(
                                    (mod, index) => (
                                        <tr key={mod.module}>

                                            <td>
                                                {mod.module}. {mod.title}
                                            </td>

                                            <td>
                                                <input
                                                    className="input input-sm input-bordered focus:outline-none w-full"
                                                    onChange={(e) =>
                                                        handleChange(
                                                            index,
                                                            "liveClass",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    className="input input-sm input-bordered focus:outline-none w-full"
                                                    onChange={(e) =>
                                                        handleChange(
                                                            index,
                                                            "recordedClass",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    className="input input-sm input-bordered focus:outline-none w-full"
                                                    onChange={(e) =>
                                                        handleChange(
                                                            index,
                                                            "assignment",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>

                                            <td>
                                                <input
                                                    className="input input-sm input-bordered focus:outline-none w-full"
                                                    onChange={(e) =>
                                                        handleChange(
                                                            index,
                                                            "exam",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    className="input input-sm input-bordered focus:outline-none w-full"
                                                    onChange={(e) =>
                                                        handleChange(
                                                            index,
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

                    <button className="btn bg-teal-300 text-black font-light">
                        Save Batch
                    </button>
                </form>
            )}
        </div>
    );
};

export default AddBatch;
