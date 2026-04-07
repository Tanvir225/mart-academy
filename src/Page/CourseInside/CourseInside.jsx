import Loading from "../../Component/Share/Loading";
import useCourseInside from "../../Hook/useCourseInside";
import CourseNotification from "./CourseNotification";
import CoursePanel from "./CoursePanel";
import ViedoPlayer from "./ViedoPlayer";
const CourseInside = () => {

    const [batchDetails, isLoading] = useCourseInside()

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <CourseNotification></CourseNotification>
            <ViedoPlayer></ViedoPlayer>
            <CoursePanel batchDetails={batchDetails}></CoursePanel>
        </section>
    );
};

export default CourseInside;