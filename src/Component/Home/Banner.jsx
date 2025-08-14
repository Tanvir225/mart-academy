

const Banner = ({img}) => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600" className="flex flex-col items-center justify-center gap-10">
            <img src={img} alt="banner" />
            <button className="btn button">Get started</button>
        </div>
    );
};

export default Banner;