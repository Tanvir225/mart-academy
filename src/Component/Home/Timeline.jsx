import { Link } from "react-router-dom";

const CourseOverview = ({ courses }) => {
    return (
        <section className="py-12 md:py-16 w-full">
            


            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                {courses?.map((course, index) => (

                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="group relative bg-gradient-to-bl from-teal-200 via-gray-400 to-cyan-200  border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >

                        {/* Number */}
                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-teal-500 transition">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-gray-700 mt-1">
                                        Build practical skills step by step
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Divider */}
                        <div className="border-t border-gray-100 my-5"></div>


                        {/* Skills */}
                        <div>

                            <p className="text-sm font-semibold text-gray-700 mb-3">
                                What you will learn
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {course?.skill?.map((skill, skillIndex) => (

                                    <span
                                        key={skillIndex}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition"
                                    >
                                        <span className="text-teal-500 font-bold">
                                            ✓
                                        </span>

                                        {skill?.name}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* Bottom */}
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">

                            <span className="text-sm text-gray-700">
                                {course?.skill?.length || 0} Skills
                            </span>

                            <Link to={`/course/${course?._id}`}
                                className="text-black font-bold text-sm hover:gap-3 hover:text-teal-600 transition-all flex items-center gap-2"
                            >
                                Explore Course
                                <span>→</span>
                            </Link>

                        </div>

                    </div>

                ))}

            </div>
        </section>
    );
};

export default CourseOverview;