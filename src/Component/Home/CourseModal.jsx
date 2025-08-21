import useCourses from "../../Hook/useCourses";
import Course from "../Share/Course";
import Title from "../Share/Title";


const CourseModal = ({ openModal, setOpenModal }) => {

    //useCourse hook to fetch courses
    const [courses] = useCourses();



    return (
        <div className="">
            <div className="mx-auto flex w-72 items-center justify-center ">

                <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${openModal ? 'opacity-100' : 'pointer-events-none opacity-0'} bg-black/60 backdrop-blur-sm`}>
                    <div className="absolute inset-0" onClick={() => setOpenModal(false)} />
                    <div className={`relative mx-auto max-w-4xl transform transition-all duration-300 md:my-8 ${openModal ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                        <div className="h-screen overflow-y-auto bg-white shadow-2xl md:max-h-[90vh] md:rounded-2xl dark:bg-gray-800">
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-end">
                                    <button onClick={() => setOpenModal(false)} className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <section className=''>
                                    <Title title="Our Courses"></Title>

                                    <div className='w-full my-5'>
                                        {
                                            courses?.map((course, index) => <Course key={index} course={course}></Course>)
                                        }
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;


