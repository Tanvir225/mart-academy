import { Link } from "react-router-dom";


const Navbar = () => {

    const links = (
        <ul className="flex justify-center items-center gap-5 space-x-0 sm:space-x-1 md:space-x-1">
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



    return (
        <div className="flex my-5 items-center justify-between ">
            <div className="text-xl">
                MART - <span className="text-teal-300 font-bold">ACADEMY</span>
            </div>
            <div className="hidden lg:block">
                {links}
            </div>

            <div className="space-x-5">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
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

                <button className="btn bg-teal-400 px-6 rounded-lg  py-2">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;