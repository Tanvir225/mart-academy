import { useEffect, useState } from "react";
import CourseModal from "./CourseModal";


const Banner = ({ img }) => {
    //state
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openModal]);

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600" className="flex flex-col items-center justify-center gap-10">
            <img src={img} alt="banner" />
            <button className="btn button " onClick={() => setOpenModal(true)}>Get started</button>

            {/* modal */}
            {openModal && <CourseModal openModal={openModal} setOpenModal={setOpenModal}></CourseModal>}
        </div>
    );
};

export default Banner;