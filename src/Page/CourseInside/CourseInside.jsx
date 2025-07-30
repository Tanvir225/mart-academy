import CourseNotification from "./CourseNotification";
import CoursePanel from "./CoursePanel";
import ViedoPlayer from "./ViedoPlayer";
const CourseInside = () => {
    return (
        <section>
            <CourseNotification></CourseNotification>
            <ViedoPlayer></ViedoPlayer>
            <CoursePanel></CoursePanel>
        </section>
    );
};

export default CourseInside;