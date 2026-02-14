import { BiVideoRecording } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { LiaFantasyFlightGames } from "react-icons/lia";
import { MdOutlineAssignment, MdOutlineSupportAgent } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const CourseFlowchart = ({ courseDetails }) => {
    return (
        <section className="flex flex-col md:flex-row my-16 ">
            <div className="space-y-5 p-5 ">
                <h2 className="text-xl lg:text-4xl font-semibold  my-5">Course Flowchart <span className='text-teal-200'>. . .</span></h2>
                <p className="w-full md:w-2/3   ">
                    The course flowchart provides a visual representation of the learning path, outlining the sequence of modules and key topics covered in the course.
                </p>

                <Link to={`/enroll/${courseDetails?._id}`} className="btn btn-outline  rounded-xl border-teal-200 font-light hover:bg-teal-200 hover:text-black">
                    Enroll Now
                </Link>
            </div>

            <div className="h-96 w-full space-y-5 overflow-y-auto p-3">
                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <RiLiveLine size={30} className="text-amber-300"></RiLiveLine >
                    <h2 className="text-lg font-semibold">Module Release time</h2>
                    <p className="text-sm">Access new modules as they are released.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <BiVideoRecording deal size={40} className=""></BiVideoRecording   >
                    <h2 className="text-lg font-semibold">Watch Recorded Class more and more</h2>
                    <p className="text-sm">Review recorded sessions anytime for better understanding.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <FaSearch deal size={30} className="text-green-400"></FaSearch   >
                    <h2 className="text-lg font-semibold">Similar topic online search</h2>
                    <p className="text-sm">Explore additional resources online to strengthen knowledge.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <MdOutlineSupportAgent size={40} className="text-yellow-400"></MdOutlineSupportAgent >
                    <h2 className="text-lg font-semibold">Live Support <span className="text-[12px] text-teal-200 font-light">Tell us your problem</span></h2>
                    <p className="text-sm">Get real-time help and ask questions to instructors.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <MdOutlineAssignment size={40} className="text-yellow-100"></MdOutlineAssignment  >
                    <h2 className="text-lg font-semibold">Submit Assignment </h2>
                    <p className="text-sm">Complete and submit assignments for each module.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <LiaFantasyFlightGames size={40} className="text-green-300"></LiaFantasyFlightGames>
                    <h2 className="text-lg font-semibold">Join contest <span className="text-teal-200 text-sm font-light">get prize money</span> </h2>
                    <p className="text-sm">Participate in contests based on exercises and win rewards.</p>
                </div>

                <div className="bg-gray-800 border-dashed border border-teal-200  hover:text-teal-300  p-5 space-y-3 w-full rounded ">
                    <GrCertificate size={40}></GrCertificate >
                    <h2 className="text-lg font-semibold">Certification </h2>
                    <p className="text-sm">Earn a certificate upon completing all modules and projects.</p>
                </div>



            </div>
        </section>
    );
};

export default CourseFlowchart;