import CourseCurriculm from "./CourseCurriculm";
import CourseDetailsHero from "./CourseDetailsHero";
import CourseIntro from "./CourseIntro";
import CourseSpeciality from "./CourseSpeciality";


const CourseDetails = () => {
    return (
        <div>
            <section>
                <CourseDetailsHero></CourseDetailsHero>
                <CourseIntro></CourseIntro>
                <CourseCurriculm></CourseCurriculm>
                <CourseSpeciality></CourseSpeciality>
            </section>
        </div>
    );
};

export default CourseDetails;