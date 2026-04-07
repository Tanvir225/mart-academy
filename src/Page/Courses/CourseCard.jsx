import { Link } from 'react-router-dom';
import courseImage from '../../assets/course.jpg';
import { Helmet } from 'react-helmet-async';

const CourseCard = ({ myCourse }) => {


    return (
        <>

            {/* meta data */}

            <Helmet>
                <title>{myCourse?.courseTitle} - Mart Academy</title>
                <meta name="description" content={myCourse?.courseDescription} />
      

                {/* Open Graph */}
                <meta property="og:title" content={myCourse?.courseTitle} />
                <meta property="og:description" content={myCourse?.courseDescription} />
                <meta property="og:image" content={myCourse?.courseImage} />
                <meta property="og:url" content={`https://mart-academy.web.app/course/${myCourse?.courseId}`} />

            </Helmet>
            {/* end */}


            <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full lg:flex-row ">

                <div className="group relative w-full">
                    <img
                        className="h-64 w-full object-cover transform rounded-lg bg-black/70"
                        src={myCourse?.courseImage}
                        alt="Course"
                    />


                </div>
                <div className="w-full h-64  space-y-3 rounded-br-lg rounded-tr-lg p-6 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] bg-[#18181B]">
                    <div className="space-y-1 ">
                        <h2 className="text-left  font-medium">{myCourse?.courseTitle}</h2>
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
                        <Link to={`/my-courses/${myCourse?.courseId}`} className="btn button Link">
                            View Course
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;