import { HashLoader } from "react-spinners";
// import loading from "../../assets/loading.gif"

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-[55vh]">
            <HashLoader color="white"></HashLoader>
            {/* <img src={loading} /> */}

        </div>
    );
};



export default Loading;