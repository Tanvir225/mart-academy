import { Outlet, useLocation } from "react-router-dom";
import elips1 from "../assets/Ellipse 1.png"
import elips2 from "../assets/Ellipse 2.png"
import elips3 from "../assets/Ellipse 3.png"
import Navbar from "../Component/Share/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Component/Share/Footer";
import MoblieNav from "../Component/Share/MoblieNav";

const Main = () => {

    const location = useLocation()

    useEffect(() => {
        Aos.init({
            duration: 700, // Animation duration in milliseconds
            easing: "ease-in-out", // Easing function for the animation
            once: false, // Whether animation should only happen once
            mirror: false, // Whether elements should animate on scroll back up
        });

    }, [])

    // Refresh AOS on every route change
    useEffect(() => {
        Aos.refresh();
    }, [location]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0f0f0f]">
            {/* Glowing Background Ellipses */}
            <div className="pointer-events-none absolute inset-0 z-20">
                {/* Ellipse 1 - Top Left */}
                <div data-aos="zoom-in-right" className="absolute  rounded-full 
                        w-[200px] h-[200px] top-[20px] -left-20 lg:left-[50px] xl:left-[200px]
                        sm:w-[250px] sm:h-[250px] 
                        md:w-[300px] md:h-[300px] 
                        lg:w-[250px] lg:h-[250px]">

                    <img src={elips1} alt="elips1" />
                </div>

                {/* Ellipse 2 - Bottom Right */}
                <div data-aos="zoom-in-left" className="absolute rounded-full  
                        w-[250px] h-[250px] right-0 
                        sm:w-[300px] sm:h-[300px] 
                        md:w-[400px] md:h-[400px] 
                        lg:w-[350px] lg:h-[350px]">

                    <img src={elips2} alt="elips2" />
                </div>

                {/* Ellipse 3 - Top Right Middle */}
                <div data-aos="zoom-in-up" className="absolute rounded-full 
                        w-[180px] h-[180px] bottom-[700px]  md:bottom-96 lg:bottom-64 
                        sm:w-[220px] sm:h-[220px] 
                        md:w-[280px] md:h-[280px] 
                        lg:w-[300px] lg:h-[300px]">

                    <img src={elips3} alt="elips3" />
                </div>
            </div>

            {/* moblie nav */}
            <MoblieNav></MoblieNav>

            {/* Main Content */}
            <div className="relative z-40 container mx-auto px-2 sm:px-6 lg:px-8">
                <section className="">
                    <Navbar></Navbar>
                </section>
                <div>
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;
