
import { useParams } from "react-router-dom";
import CourseCurriculm from "./CourseCurriculm";
import CourseDetailsHero from "./CourseDetailsHero";
import CourseFlowchart from "./CourseFlowchart";
import CourseIntro from "./CourseIntro";
import CourseSpeciality from "./CourseSpeciality";
import usePublicAxios from "../../Hook/usePublicAxios";
import { useEffect, useState } from "react";


const CourseDetails = () => {

    const { id } = useParams();

    //get course details by id
    const axios = usePublicAxios();
    const [courseDetails, setCourseDetails] = useState();


    // Fetch course details when component mounts
    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`/courses/${id}`);
                setCourseDetails(response.data);
            } catch (error) {
                console.error("Error fetching course details:", error);
            }
        }
        fetchCourseDetails();
    }, [id, axios]);




    return (
        <div>
            <section>
                <CourseDetailsHero courseDetails={courseDetails}></CourseDetailsHero>
                <CourseIntro courseDetails={courseDetails}></CourseIntro>
                <CourseCurriculm></CourseCurriculm>
                <CourseSpeciality></CourseSpeciality>
                <CourseFlowchart></CourseFlowchart>
            </section>
        </div>
    );
};

export default CourseDetails;