import { BsChat, BsEasel, BsHouse, BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";


const MoblieNav = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full">
            <ul className="menu menu-horizontal bg-base-200 rounded-box  w-full justify-between px-5">
                <li>
                    <Link to={"/"} className="tooltip" data-tip="Home">
                        <BsHouse size={20}></BsHouse>
                    </Link>
                </li>
                <li>
                    <Link to={'/courses'} className="tooltip" data-tip="Courses">
                        <BsEasel size={20}></BsEasel>
                    </Link>
                </li>
                <li>
                    <Link to={'/profile'} className="tooltip" data-tip="Profile">
                        <BsPersonWorkspace size={20}></BsPersonWorkspace>
                    </Link>
                </li>
                <li>
                    <Link to={'/contact-us'} className="tooltip" data-tip="Contact">
                        <BsChat size={20} ></BsChat>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MoblieNav;