import CountUp from 'react-countup';
import courseImage from '../../assets/course.jpg';


const Course = () => {


    return (
        <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <div className="group relative w-full">
                <img
                    width={400}
                    height={400}
                    className="h-64 w-full object-cover lg:scale-105 transform rounded-lg bg-black/70"
                    src={courseImage}
                    alt="Course"
                />
                <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center justify-center rounded-full bg-white bg-gradient-to-tr from-[#62bb4c] to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                    <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                            <g id="style=linear">
                                <g id="add">
                                    <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path>
                                    <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span>
                <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 hover:-translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
                <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px]"></span>
            </div>
            <div className="w-full h-64 overflow-y-auto space-y-7 rounded-br-lg rounded-tr-lg bg-white p-7 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]  dark:bg-[#18181B] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                <div className="space-y-1">
                    <h2 className="text-center text-2xl font-medium text-gray-700 lg:text-lg dark:text-white/90">AI Power Web Development</h2>
                    <p className="text-gray-500 text-xs dark:text-white/70">Mart <span className='text-teal-300'>Academy</span></p>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-teal-300">Duration</p>
                        <div className="text-center">
                            <CountUp
                                end={2}
                                duration={2}
                                enableScrollSpy={true}
                                scrollSpyOnce={false}
                                scrollSpyDelay={200} // delay in ms
                                className="text-2xl tracking-wider text-gray-700 lg:text-3xl dark:text-white/80"
                            />
                            <br />
                            <span className="text-xs">months</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-teal-300">Modules</p>
                        <div className="text-center">
                            <CountUp
                                end={20}
                                duration={2}
                                enableScrollSpy={true}
                                scrollSpyOnce={false}
                                scrollSpyDelay={200} // delay in ms
                                className="text-2xl tracking-wider text-gray-700 lg:text-3xl dark:text-white/80"
                            />
                            <br />
                            <span className="text-xs">modules</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-teal-300">Projects</p>
                        <div className="text-center">
                            <CountUp
                                end={10}
                                duration={2}
                                enableScrollSpy={true}
                                scrollSpyOnce={false}
                                scrollSpyDelay={200} // delay in ms
                                className="text-2xl tracking-wider text-gray-700 lg:text-3xl dark:text-white/80"
                            />
                            <br />
                            <span className="text-xs">live</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn button">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;