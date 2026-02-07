import { useState } from "react";
import { Link } from "react-router-dom";

const AddCourse = () => {
    const [course, setCourse] = useState({
        title: "",
        subtitle: "",
        description: "",
        thumbnail: "",
        introVideo: "",
        summary: {
            modules: 0,
            duration: 0,
            projects: 0,
            batchEnd: "",
            admissionStart: "",
            newBatch: "",
        },
        skill: [],
        modules: [],
    });

    // For adding skills dynamically
    const [skillInput, setSkillInput] = useState({ name: "", bg: "", text: "" });
    // For adding modules dynamically
    const [moduleInput, setModuleInput] = useState({
        module: "",
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prev) => ({ ...prev, [name]: value }));
    };

    const handleSummaryChange = (e) => {
        const { name, value } = e.target;
        setCourse((prev) => ({
            ...prev,
            summary: { ...prev.summary, [name]: value },
        }));
    };

    const addSkill = () => {
        if (!skillInput.name) return;
        setCourse((prev) => ({
            ...prev,
            skill: [...prev.skill, skillInput],
        }));
        setSkillInput({ name: "", bg: "", text: "" });
    };

    const removeSkill = (index) => {
        setCourse((prev) => ({
            ...prev,
            skill: prev.skill.filter((_, i) => i !== index),
        }));
    };

    const addModule = () => {
        if (!moduleInput.title) return;
        setCourse((prev) => ({
            ...prev,
            modules: [
                ...prev.modules,
                { ...moduleInput, module: prev.modules.length + 1 },
            ],
        }));
        setModuleInput({ module: "", title: "", description: "" });
    };

    const removeModule = (index) => {
        setCourse((prev) => ({
            ...prev,
            modules: prev.modules.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(course);
        setCourse({
            title: "",
            subtitle: "",
            description: "",
            thumbnail: "",
            introVideo: "",
            summary: {
                modules: 0,
                duration: 0,
                projects: 0,
                batchEnd: "",
                admissionStart: "",
                newBatch: "",
            },
            skill: [],
            modules: [],
        });


        // try {
        //     const res = await fetch("http://localhost:5000/api/courses", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(course),
        //     });

        //     if (res.ok) {
        //         alert("✅ Course created successfully!");
        //         setCourse({
        //             title: "",
        //             subtitle: "",
        //             description: "",
        //             thumbnail: "",
        //             introVideo: "",
        //             summary: {
        //                 modules: 0,
        //                 duration: 0,
        //                 projects: 0,
        //                 batchEnd: "",
        //                 admissionStart: "",
        //                 newBatch: "",
        //             },
        //             skill: [],
        //             modules: [],
        //         });
        //     } else {
        //         alert("❌ Failed to create course");
        //     }
        // } catch (err) {
        //     console.error(err);
        // }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 shadow rounded-lg">
            <div className="flex flex-row-reverse justify-between border-b-2 mb-5">
                <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
                <Link to={"/dashboard/admin-courses"} className="btn btn-sm bg-teal-200 text-black font-light">Back</Link>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Basic Info */}
                <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                    value={course.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Subtitle"
                    className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                    value={course.subtitle}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                    value={course.description}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="thumbnail"
                    placeholder="Thumbnail URL"
                    className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                    value={course.thumbnail}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="introVideo"
                    placeholder="Intro Video URL"
                    className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                    value={course.introVideo}
                    onChange={handleChange}
                />

                {/* Summary */}
                <h3 className="text-lg font-semibold">Course Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="number"
                        name="modules"
                        placeholder="Total Modules"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course.summary.modules}
                        onChange={handleSummaryChange}
                    />
                    <input
                        type="number"
                        name="duration"
                        placeholder="Duration (months)"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course.summary.duration}
                        onChange={handleSummaryChange}
                    />
                    <input
                        type="number"
                        name="projects"
                        placeholder="Total Projects"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course.summary.projects}
                        onChange={handleSummaryChange}
                    />
                    <input
                        type="text"
                        name="batchEnd"
                        placeholder="Batch End Date"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course.summary.batchEnd}
                        onChange={handleSummaryChange}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                        }}
                    />

                    <input
                        type="text"
                        name="admissionStart"
                        placeholder="Admission Start Date"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course.summary.admissionStart}
                        onChange={handleSummaryChange}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                        }}
                    />

                    <input
                        type="text"
                        name="newBatch"
                        placeholder="New Batch Start Date"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={course?.summary?.newBatch}
                        onChange={handleSummaryChange}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                        }}
                    />

                </div>

                {/* Skills */}
                <h3 className="text-lg font-semibold mt-4">Add Skills</h3>
                <div className="flex lg:flex-row flex-wrap gap-2">
                    <input
                        type="text"
                        placeholder="Skill Name"
                        className="flex-1 border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={skillInput.name}
                        onChange={(e) =>
                            setSkillInput({ ...skillInput, name: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="BG Class"
                        className="flex-1 border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={skillInput.bg}
                        onChange={(e) =>
                            setSkillInput({ ...skillInput, bg: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Text Class"
                        className="flex-1 border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={skillInput.text}
                        onChange={(e) =>
                            setSkillInput({ ...skillInput, text: e.target.value })
                        }
                    />
                    <button
                        type="button"
                        onClick={addSkill}
                        className="px-3 py-1 bg-teal-300 rounded hover:bg-teal-400"
                    >
                        +
                    </button>
                </div>
                <ul className="list-disc space-y-5">
                    {course.skill.map((s, i) => (
                        <li key={i} className="flex items-center w-full gap-5">
                            {s.name}
                            <button
                                type="button"
                                onClick={() => removeSkill(i)}
                                className="text-red-500 btn btn-sm btn-outline"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Modules */}
                <h3 className="text-lg font-semibold mt-4">Add Modules</h3>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Module Title"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={moduleInput.title}
                        onChange={(e) =>
                            setModuleInput({ ...moduleInput, title: e.target.value })
                        }
                    />
                    <textarea
                        placeholder="Module Description"
                        className="w-full border border-teal-200 bg-transparent focus:outline-none p-2 rounded"
                        value={moduleInput.description}
                        onChange={(e) =>
                            setModuleInput({ ...moduleInput, description: e.target.value })
                        }
                    ></textarea>
                    <button
                        type="button"
                        onClick={addModule}
                        className="btn font-light btn-sm btn-outline text-teal-300 rounded"
                    >
                        Add Module
                    </button>
                </div>
                <ul className="list-decimal ">
                    {course.modules.map((m, i) => (
                        <li key={i} className="flex items-center gap-5">
                            {m.title}
                            <button
                                type="button"
                                onClick={() => removeModule(i)}
                                className="text-red-500 btn btn-sm btn-outline"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white py-2 rounded"
                >
                    Save Course
                </button>
            </form>
        </div>
    );
};

export default AddCourse;
