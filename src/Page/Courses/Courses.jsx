import {useEffect, useState } from "react";
import useUser from "../../Hook/useUser";
import CourseCard from "./CourseCard";
import useAxios from "../../Hook/useAxios";


const Courses = () => {

    const [userData] = useUser();
    const [myCourses, setMyCourses] = useState();
    const axios = useAxios();

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const res = await axios.get(`/my-courses/${userData?.email}`);
                setMyCourses(res.data);
            } catch (error) {
                console.error("Error fetching my courses:", error);
            }
        };
        if (userData?.email) {
            fetchMyCourses();
        }

    }, [axios, userData?.email]);

    return (
        <section className="my-10 space-y-5">
            <section>
                <h1 className="text-2xl font-bold text-center leading-loose lg:leading-loose ">What you know matters .
                    What you <span className="bg-teal-200 text-black p-1 rounded-xl">learn</span> ,<br />
                    you carry <span className="bg-teal-200 text-black p-1 rounded-xl">forever</span> .
                </h1>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-7  w-full">
                {myCourses?.map((course) => (
                    <CourseCard key={course._id} myCourse={course} />
                ))}

            </section>

            {
                myCourses?.length === 0 && <div className="text-center mt-10">
                    <h2 className="text-2xl text-teal-200 font-bold">You have not enrolled in any courses yet.</h2>
                    <p className="text-gray-300 mt-2 animate-pulse">Explore our courses and start learning today!</p>
                </div>
            }

        </section>
    );
};

export default Courses;