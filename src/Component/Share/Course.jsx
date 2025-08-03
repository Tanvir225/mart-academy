import CountUp from 'react-countup';
import courseImage from '../../assets/course.jpg';
import { Link } from 'react-router-dom';



const Course = () => {



    return (
        <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full md:flex-row ">
            <div className="group relative w-full">
                <img
                    className="h-64 w-full object-cover transform rounded-lg bg-black/70"
                    src={courseImage}
                    alt="Course"
                />


            </div>
            <div className="w-full h-70 overflow-y-auto space-y-4 rounded-br-lg rounded-tr-lg  p-6 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] bg-[#18181B]">
                <div className="space-y-1 ">
                    <h2 className="text-center  font-medium text-lg ">Wordpress Web development</h2>
                    <p className="text-xs">Mart <span className='text-teal-300'>Academy</span></p>

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
                <div className='w-full flex flex-row items-center justify-center gap-5'>
                    <Link to={`/course/${1}`} className="btn button Link">
                        View Details
                    </Link>

                    <Link to={`/payment`} className="btn btn-outline btn-sm rounded-xl border-teal-200 font-light hover:bg-teal-200 hover:text-black">
                        Enroll Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;