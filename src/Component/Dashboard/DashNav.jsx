import { NavLink } from "react-router-dom";


const DashNav = () => {

    const links = (
        <ul className="flex flex-col justify-center items-center gap-5 ">
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
                <NavLink to={'/about-us'} style={({ isActive }) => ({
                    color: isActive ? "#7aebeb	" : "",
                })}>Students</NavLink>
            </li>
        </ul>
    )


    return (
        <div className="flex items-center justify-center h-full">
            {
                links
            }
        </div>
    );
};

export default DashNav;