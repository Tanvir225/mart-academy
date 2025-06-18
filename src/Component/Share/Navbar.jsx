import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignLeft } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {

    //state
    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-5 space-x-0 sm:space-x-1 md:space-x-1">
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Courses</Link>
            </li>
            <li>
                <Link>Contact</Link>
            </li>
            <li>
                <Link>About</Link>
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

                <p className="text-xs sm:text-xl md:text-xl lg:text-xl">
                    MART-<span className="text-teal-300 font-bold">ACADEMY</span>
                </p>

            </div>

            <div className="hidden lg:block">
                {links}
            </div>

            <div className={`lg:hidden absolute   left-0 top-10 w-full h-full bg-base-100 p-5 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full -top-10'}`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="btn btn-ghost">
                        <AiOutlineClose ></AiOutlineClose>
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    {links}
                </div>
            </div>

            <div className="flex space-x-2 lg:space-x-3">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full z-20">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <button className="btn button z-20">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;