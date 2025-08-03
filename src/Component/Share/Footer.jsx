import React, { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { GoMoveToTop } from "react-icons/go";

const Footer = () => {
    const footerRef = useRef();
    const [showWhatsapp, setShowWhatsapp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!footerRef.current) return;

            const footerTop = footerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight - 100) {
                setShowWhatsapp(true);
            } else {
                setShowWhatsapp(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="relative">
            {/* --- Footer Content --- */}
            <footer
                ref={footerRef}
                className="footer footer-center border-t-2 rounded-t-xl ring-2 text-primary-content p-7 bg-base-200"
            >
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="inline-block fill-current"
                    >
                        <path d="M22.672 15.226l-2.432.811..." />
                    </svg>
                    <p className="font-bold text-lg mt-2">
                        MART <span className="bg-teal-200 text-black p-1 rounded-lg">Academy</span>
                    </p>
                    <p className="text-sm">Providing reliable Lesson since 2024</p>

                    <p className="text-xs mt-2 leading-6">
                        <span>312/4 , Lalkuthi Second Colony</span><br />
                        <span>Mirpur-1, Dhaka-1216, Bangladesh</span>
                    </p>

                    <ul className="space-y-3 font-light border-t border-b border-dashed border-teal-200 p-2 text-left">
                        <li><strong>📧 Email:</strong> martacad200@gmail.com</li>
                        <li><strong>📞 Phone:</strong> +880 1812-122545</li>
                    </ul>

                    <p>Copyright © {new Date().getFullYear()} Mart Academy - All rights reserved</p>
                    <p className="text-xs mt-2">Follow us on social media</p>
                    <nav>
                        <div className="grid grid-flow-col gap-4 ">
                            <a href="https://www.facebook.com/martAcadmy" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a>
                            <a href="#"><FaYoutube size={25} /></a>
                            <a href="#"><FaLinkedin size={25} /></a>
                        </div>
                    </nav>
                </aside>


            </footer>

            {/* --- Floating Buttons --- */}
            {showWhatsapp && (
                <div className="z-50">
                    <a
                        href="https://wa.me/8801812122545"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-green-500 text-white btn-circle btn-lg fixed bottom-28 right-5  shadow-lg hover:scale-110 transition-all"
                        title="Chat on WhatsApp"
                    >
                        <FaWhatsapp size={24} />
                    </a>

                    <button
                        onClick={scrollTop}
                        className="btn bg-blue-600 text-white btn-circle btn-lg fixed bottom-12 right-5 shadow-lg hover:scale-110 transition-all"
                        title="Scroll to top"
                    >
                        <GoMoveToTop size={24} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Footer;
