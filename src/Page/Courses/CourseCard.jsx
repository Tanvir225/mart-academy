import { Link } from 'react-router-dom';
import courseImage from '../../assets/course.jpg';

const CourseCard = () => {
    return (
        <div data-aos="fade-up" className="flex flex-col items-center justify-center w-full md:flex-row ">
            <div className="group relative w-full">
                <img
                    className="h-64 w-full object-cover transform rounded-lg bg-black/70"
                    src={courseImage}
                    alt="Course"
                />


            </div>
            <div className="w-full h-64 flex flex-col items-center justify-center space-y-3 rounded-br-lg rounded-tr-lg  p-6 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] bg-[#18181B]">
                <div className="space-y-1 ">
                    <h2 className="text-left  font-medium">Wordpress Web development</h2>
                    <p className="text-xs text-left">Mart <span className='text-teal-300'>Academy</span></p>

                </div>

                <div className='w-full p-2'>
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
    );
};

export default CourseCard;