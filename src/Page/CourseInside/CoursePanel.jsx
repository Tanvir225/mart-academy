
import { LiaFantasyFlightGames } from "react-icons/lia";
import { TiMediaRecordOutline } from "react-icons/ti";
import LiveInside from "./LiveInside";
import RecordInside from "./RecordInside";
import ContestInside from "./ContestInside";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentInside from "./AssignmentInside";


const CoursePanel = () => {
    return (
        <section className="my-10">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <label className="tab text-lg">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
                    Live
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <LiveInside></LiveInside>
                </div>

                <label className="tab text-lg">
                    <input type="radio" name="my_tabs_4" />
                    <TiMediaRecordOutline size={25} className="mr-1"></TiMediaRecordOutline >
                    Recorded
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <RecordInside></RecordInside>
                </div>

                <label className="tab text-lg ">
                    <input type="radio" name="my_tabs_4" />
                    <MdOutlineAssignment size={20} className="mr-2"></MdOutlineAssignment >
                    Assignment
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <AssignmentInside></AssignmentInside>
                </div>

                <label className="tab text-lg ">
                    <input type="radio" name="my_tabs_4" />
                    <LiaFantasyFlightGames size={20} className="mr-2"></LiaFantasyFlightGames>
                    Contest
                </label>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <ContestInside></ContestInside>
                </div>


            </div>
        </section>
    );
};

export default CoursePanel;