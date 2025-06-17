import banner from "../../assets/web development.png"

const Banner = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600" className="">
            <img src={banner} alt="banner" />
        </div>
    );
};

export default Banner;