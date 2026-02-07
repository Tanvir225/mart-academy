
import { BiVideoRecording } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaFantasyFlightGames } from "react-icons/lia";
import { MdOutlineAssignment, MdOutlineSupportAgent } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";



const CourseSpeciality = ({courseDetails}) => {
    return (
        <section className=" my-10 lg:my-16 bg-no-repeat object-contain border-dotted border-b-2 pb-5 " >
            <h1 className="text-xl mt-10 lg:text-3xl font-semibold border-dotted border-b-2 pb-5 sticky top-0 bg-gray-700 p-1 rounded border-teal-200">Course <span className="bg-teal-200 px-3 p-2 rounded-xl text-black">Speciality</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7 ">
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <RiLiveLine size={30} className="text-amber-300"></RiLiveLine >
                    <h2 className="text-lg font-semibold">Live Class</h2>
                    <p className="text-sm">Interactive sessions covering all modules.</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <HiOutlineLightBulb deal size={40} color="yellow"></HiOutlineLightBulb  >
                    <h2 className="text-lg font-semibold">{courseDetails?.summary?.projects}  Projects and Assignments</h2>
                    <p className="text-sm">Hands-on projects and assignments on {courseDetails?.skill?.map(s => s.name).join(" , ")}</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <MdOutlineAssignment deal size={40} className="text-yellow-100"></MdOutlineAssignment  >
                    <h2 className="text-lg font-semibold">{courseDetails?.summary?.modules}  Modules</h2>
                    <p className="text-sm">Module-based exercises to practice key skills.</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <BiVideoRecording deal size={40} className=""></BiVideoRecording   >
                    <h2 className="text-lg font-semibold">Recorded Class</h2>
                    <p className="text-sm">Access recordings of all live sessions anytime.</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <LiaFantasyFlightGames deal size={40} className="text-green-300"></LiaFantasyFlightGames>
                    <h2 className="text-lg font-semibold">Join Contest Get <span className="bg-teal-200 text-black p-1 rounded-xl">Money</span></h2>
                    <p className="text-sm">Mini-contests based on exercises to win rewards.</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <MdOutlineSupportAgent size={40} className="text-yellow-400"></MdOutlineSupportAgent >
                    <h2 className="text-lg font-semibold">Live Support</h2>
                    <p className="text-sm">Real-time help from instructors when needed.</p>
                </section>
                <section className="space-y-3 p-5 border-2 border-teal-200 rounded-lg my-5 w-full">
                    <GrCertificate deal size={40}></GrCertificate >
                    <h2 className="text-lg font-semibold">Certification </h2>
                    <p className="text-sm">Receive a certificate after completing all modules and projects.</p>
                </section>
            </div>
        </section>
    );
};

export default CourseSpeciality;