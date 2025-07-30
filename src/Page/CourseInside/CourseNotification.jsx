import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";


const CourseNotification = () => {
    return (
        <section className="flex justify-between w-full">
            <div className="">
                <Link to={-1} className="btn btn-sm bg-teal-200 text-black">back</Link>
            </div>
            <div className="relative cursor-pointer">
                <IoIosNotificationsOutline size={30}></IoIosNotificationsOutline>
                <span className="badge badge-warning badge-dash badge-sm absolute bottom-5 left-5">2</span>
            </div>
        </section>
    );
};

export default CourseNotification;