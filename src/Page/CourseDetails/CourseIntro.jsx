
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



// dummy data
const skills = [
    { name: "MS WORD", bg: "bg-[#2c1513]", text: "text-[#e44d26]" },
    { name: "MS EXCEL", bg: "bg-[#1e2c5f]", text: "text-[#fff]" },
    { name: "MS POWERPOINT", bg: "bg-[#0f2d42]", text: "text-[#38bdf8]" },
    { name: "Google Sheets", bg: "bg-[#2d2b1a]", text: "text-[#f0db4f]" },
    { name: "Canva", bg: "bg-[#012a3a]", text: "text-[#61dafb]" },

];