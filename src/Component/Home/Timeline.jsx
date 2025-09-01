

const Timeline = ({ courses }) => {
    // console.log(courses);
    return (
        <div className="my-7 w-full" >
            {
                courses?.map((course, index) => (
                    <ul key={index} className="timeline timeline-vertical " data-aos="fade-up">
                        <li>
                            <div className="timeline-start timeline-box text-[16px]">{course.title}</div>
                            <div className="timeline-middle">
                                {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-primary h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg> */}
                            </div>

                        </li>
                        {
                            course?.skill?.map((skill, skillIndex) => (
                                <li key={skillIndex} className="timeline-item">
                                    <hr className="bg-teal-200" />
                                    <div className="timeline-middle timeline-box">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="text-white h-5 w-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="timeline-compact timeline-box mt-2 -my-7">{skill?.name}</div>
                                    {/* <hr className="bg-teal-200" /> */}
                                </li>
                            ))
                        }

                    </ul>
                ))
            }
        </div>
    );
};

export default Timeline;