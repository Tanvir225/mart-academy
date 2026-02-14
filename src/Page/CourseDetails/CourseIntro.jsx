
import ReactPlayer from 'react-player'
const CourseIntro = ({courseDetails}) => {
    return (
        <section>
            <div>
                <h2 className="text-xl lg:text-4xl font-semibold text-center my-5">What We Learn <span className='text-teal-200'>. . .</span></h2>
                <div className="flex flex-wrap gap-4 p-4 justify-center">
                    {courseDetails?.skill.map((skill, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-md font-semibold ${skill.bg} ${skill.text}`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

                <div className='flex justify-center items-center my-7 w-full rounded '>
                    <ReactPlayer src={courseDetails?.introVideo} className='w-full object-cover rounded' width={900} light:true height={350} fallback playIcon playing></ReactPlayer>
                </div>
            </div>
        </section>
    );
};

export default CourseIntro;


