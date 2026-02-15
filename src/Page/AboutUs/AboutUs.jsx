import React from 'react';
import About from '../../Component/AboutUs/About';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>

            <Helmet>
                {/* Basic SEO */}
                <title>
                    Mart Academy – About Us | Learn Skills
                </title>

                <meta
                    name="description"
                    content="Mart Academy is a modern online learning platform dedicated to empowering students with practical digital skills, career-focused courses, and industry-standard training. Learn programming, IT, and professional skills to advance your future with expert guidance and real-world projects."
                />

                <meta
                    name="keywords"
                    content="Mart Academy, Online Learning Platform, Programming Courses, IT Training Institute, Digital Skills Training, Web Development Course, MERN Stack Training, Career Development"
                />

                <meta name="author" content="Mart Academy" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph (Facebook SEO) */}
                <meta
                    property="og:title"
                    content="About Mart Academy – Empowering Future Tech Professionals"
                />

                <meta
                    property="og:description"
                    content="Discover Mart Academy’s mission to provide practical tech education, career skills, and industry-ready training through expert mentorship and real-world learning."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mart-academy.web.app/about-us" />
                <meta
                    property="og:image"
                    content="https://i.ibb.co.com/CK4MGtGx/contest.gif"
                />

                {/* Twitter SEO */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Mart Academy – About Us"
                />
                <meta
                    name="twitter:description"
                    content="Learn about Mart Academy’s mission, vision, and commitment to empowering learners with real-world digital skills."
                />
            </Helmet>


            <About></About>
        </div>
    );
};

export default AboutUs;