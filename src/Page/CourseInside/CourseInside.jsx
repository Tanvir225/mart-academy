import { useState } from "react";
import Loading from "../../Component/Share/Loading";
import useCourseInside from "../../Hook/useCourseInside";
import CourseNotification from "./CourseNotification";
import CoursePanel from "./CoursePanel";
import ViedoPlayer from "./ViedoPlayer";
const CourseInside = () => {

    const [batchDetails, isLoading] = useCourseInside()

    const [videoUrl, setVideoUrl] = useState(""); // 🔥 main state

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <CourseNotification></CourseNotification>
            <ViedoPlayer videoUrl={videoUrl}></ViedoPlayer>
            <CoursePanel batchDetails={batchDetails} setVideoUrl={setVideoUrl} ></CoursePanel>
        </section>
    );
};

export default CourseInside;