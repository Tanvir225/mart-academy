import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";


const CourseNotification = () => {
    return (
        <section className="flex justify-between w-full">
            <div className="">
                <Link to={-1} className="btn btn-sm bg-teal-200 text-black">back</Link>
            </div>
            <div className="">
                <Link to={''} className="btn btn-sm bg-green-200 text-black font-light">game</Link>
            </div>
        </section>
    );
};

export default CourseNotification;