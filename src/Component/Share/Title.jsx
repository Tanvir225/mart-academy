import { PuffLoader } from "react-spinners";

const Title = ({ title }) => {
    return (
        <div data-aos = "zoom-in-up" className="text-white leading-10 text-2xl md:text-5xl font-bold text-center">
            {title}
            <div className="flex justify-center items-center mt-2">
                <PuffLoader color="#D3FF73"></PuffLoader >
            </div>
        </div>
    );
};

export default Title;