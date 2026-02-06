import { Link, NavLink } from "react-router-dom";


const DashNav = () => {

    const links = (
        <ul className="flex flex-col justify-center items-center gap-3 ">
            <li>
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })} to={"/dashboard"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"add-course"} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Add Course</NavLink>
            </li>
            <li>
                <NavLink to={'/'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Courses</NavLink>
            </li>
            <li>
                <NavLink to={'batches'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Batches</NavLink>
            </li>
            <li>
                <NavLink to={'all-users'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Students</NavLink>
            </li>

        </ul>
    )


    return (
        <div className="flex items-center flex-col  justify-center h-full">
            <Link to={"/"} className="text-xs sm:text-xl md:text-xl lg:text-xl">
                MART-<span className="text-teal-300 font-bold">ACADEMY</span>
            </Link>
            <p className="divider"></p>
            {
                links
            }
        </div>
    );
};

export default DashNav;