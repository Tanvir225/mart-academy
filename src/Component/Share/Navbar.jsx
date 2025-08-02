import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {

    //state
    const [isOpen, setIsOpen] = useState(false);

    //HOOK 
    const { user, logoutUser } = useAuth();

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
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
                <Link to={'contact-us'}>Contact</Link>
            </li>
            <li>
                <Link to={'/about-us'}>About</Link>
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

            <div className="flex space-x-2 lg:space-x-3 z-20">
                {
                    user ? (
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
                                        {user?.displayName || "Profile"}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    <Link

                                        onClick={handleLogOut}

                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
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