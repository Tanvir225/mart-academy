import { BsChat, BsEasel, BsHouse, BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";


const MoblieNav = () => {
    const {user} = useAuth()

    const handleClick = ()=>{
        if(!user){
            toast.error("you need to login first")
        }
    }
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full">
            <ul className="menu menu-horizontal bg-base-200 rounded-box  w-full justify-between px-5 py-2">
                <li>
                    <NavLink to={"/"} style={({ isActive }) => ({
                        color: isActive ? "#7aebeb	" : "",
                    })} className="tooltip" data-tip="Home">
                        <BsHouse size={22}></BsHouse>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to={'/courses'} style={({ isActive }) => ({
                        color: isActive ? "#7aebeb	" : "",
                    })} className="tooltip" data-tip="Courses">
                        <BsEasel size={22}></BsEasel>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleClick} to={'/profile'} style={({ isActive }) => ({
                        color: isActive ? "#7aebeb	" : "",
                    })} className="tooltip" data-tip="Profile">
                        <BsPersonWorkspace size={22}></BsPersonWorkspace>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact-us'} style={({ isActive }) => ({
                        color: isActive ? "#7aebeb	" : "",
                    })} className="tooltip" data-tip="Contact">
                        <BsChat size={22} ></BsChat>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default MoblieNav;