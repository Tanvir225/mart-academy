import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignLeft } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { IoIosNotificationsOutline } from "react-icons/io";
import useAdmin from "../../Hook/useAdmin";


const Navbar = () => {

    //state
    const [isOpen, setIsOpen] = useState(false);
    const [clickNotification, setClickNotification] = useState(false);

    //HOOK 
    const { user, logoutUser } = useAuth();
    const [isAdmin] = useAdmin();

    //handleLogOut
    const handleLogOut = () => {
        logoutUser().then((res) => {
            console.log(res);
            toast.success("logout Successfull");
        });
    };

    const links = (
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 space-x-0 sm:space-x-1 md:space-x-1">
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })} to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/courses"} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Courses</NavLink>
            </li>
            <li>
                <NavLink to={'contact-us'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/about-us'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>About</NavLink>
            </li>
        </ul>
    )

    console.log(isOpen);

    return (
        <div className="flex my-5 items-center justify-between ">

            <div className="flex items-center gap-2 lg:gap-3 z-20">
                <div onClick={() => setIsOpen(true)} className="lg:hidden">
                    <FiAlignLeft color="#D6FF7F" ></FiAlignLeft>
                </div>

                <Link to={"/"} onClick={() => setIsOpen(false)} className="text-xs sm:text-xl md:text-xl lg:text-xl">
                    MART-<span className="text-teal-300 font-bold">ACADEMY</span>
                </Link>

            </div>

            <div className="hidden lg:block">
                {links}
            </div>

            <div className={`lg:hidden absolute   left-0 z-10 top-10 w-full h-full bg-base-100 p-5 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full -top-96'}`}>
                <div className="flex justify-between items-center mb-5 animate-pulse z-20">
                    <Link to={"/"} className="text-xs sm:text-xl md:text-xl lg:text-xl ">
                        MART-<span className="text-teal-300 font-bold">ACADEMY</span>
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="btn btn-ghost">
                        <AiOutlineClose ></AiOutlineClose>
                    </button>
                </div>
                <div className="flex flex-col items-center" onClick={() => setIsOpen(false)}>
                    {links}
                </div>
            </div>

            <div className="flex space-x-5  z-20">



                {/* notification area */}
                {clickNotification && (
                    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-64 z-20">
                        <h3 className="text-black text-base border-b-2 pb-1 ">Notifications</h3>
                        <ul className="space-y-2 mt-1">
                            <li className="text-sm text-gray-700">New course available: <span className="font-bold">React Basics</span></li>
                            <li className="text-sm text-gray-700">Your course <span className
                                ="font-bold">JavaScript Essentials</span> has been updated.</li>
                            <li className="text-sm text-gray-700">Don't miss our upcoming webinar on
                                <span className="font-bold">Web Development Trends</span>.</li>
                        </ul>
                        <button
                            onClick={() => setClickNotification(false)}
                            className="btn btn-sm btn-primary mt-3 w-full">

                            Close
                        </button>
                    </div>
                )}



                {/* user profile */}

                {
                    user ? (
                        <div className="flex items-center gap-7 justify-center relative ">
                            <div className="relative cursor-pointer" onClick={() => setClickNotification(!clickNotification)}>
                                <IoIosNotificationsOutline size={30}></IoIosNotificationsOutline>
                                <span className="badge badge-warning badge-dash badge-sm absolute bottom-5 left-5">2</span>
                            </div>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full z-20">
                                        <img
                                            alt={`${user?.displayName || "User's avatar"}`}
                                            src={`${user?.photoURL}`} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName || "Xino"}
                                            <span className="badge">S</span>
                                        </a>
                                    </li>
                                    <li className="hidden md:block"><Link to={"/profile"}>profile</Link></li>
                                    {
                                        isAdmin && <li className="block"><Link to={"/dashboard"}>Dashboard</Link></li>
                                    }
                                    <li>
                                        <Link

                                            onClick={handleLogOut}

                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                        :
                        <Link to={"/login"} className="btn button z-20">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;