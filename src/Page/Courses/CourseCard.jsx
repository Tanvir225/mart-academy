import { Link } from 'react-router-dom';
import courseImage from '../../assets/course.jpg';
import { Helmet } from 'react-helmet-async';

const CourseCard = () => {
    return (
        <>

            {/* meta data */}

            <Helmet>
                {/* <title>{course.title} - Mart Academy</title>
                <meta name="description" content={course.shortDescription} />
                <meta name="keywords" content={course.keywords.join(", ")} /> */}

                {/* Open Graph */}
                {/* <meta property="og:title" content={course.title} />
                <meta property="og:description" content={course.shortDescription} />
                <meta property="og:image" content={course.image} />
                <meta property="og:url" content={`http://hideous-ray.surge.sh/course/${id}`} /> */}

            </Helmet>
            {/* end */}


            <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full lg:flex-row ">



                <div className="group relative w-full">
                    <img
                        className="h-64 w-full object-cover transform rounded-lg bg-black/70"
                        src={courseImage}
                        alt="Course"
                    />


                </div>
                <div className="w-full h-64  space-y-3 rounded-br-lg rounded-tr-lg p-6 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] bg-[#18181B]">
                    <div className="space-y-1 ">
                        <h2 className="text-left  font-medium">Wordpress Web development</h2>
                        <p className="text-xs text-left">Mart <span className='text-teal-300'>Academy</span></p>

                    </div>

                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <p className="text-sm text-left text-teal-300">Course Progress</p>
                            <p className="text-xs text-left">50%</p>
                        </div>
                        <progress className="progress" value={50} max={100} ></progress>
                    </div>

                    <div className='w-full'>
                        <Link to={`/courses/${1}`} className="btn button Link">
                            View Course
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;