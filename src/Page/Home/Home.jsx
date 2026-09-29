import React from "react";
import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";

import Title from "../../Component/Share/Title";
import SubTitle from "../../Component/Share/SubTitle";
import Course from "../../Component/Share/Course";
import FAQ from "../../Component/Share/FAQ";

import Banner from "../../Component/Home/Banner";
import Timeline from "../../Component/Home/Timeline";
import Success_Story from "../../Component/Home/Success_Story";
import LearningJourney from "../../Component/Home/LearningJourney";

import Loading from "../../Component/Share/Loading";

import useBanner from "../../Hook/useBanner";
import useFaq from "../../Hook/useFaq";
import useCourses from "../../Hook/useCourses";


const Home = () => {

    // ============================
    // Fetch Data
    // ============================

    const [banner_data, isLoading] = useBanner();
    const [faq_data] = useFaq();
    const [courses] = useCourses();


    // ============================
    // Loading
    // ============================

    if (isLoading) {
        return <Loading />;
    }


    return (
        <div className="overflow-hidden">

            {/* =====================================================
                SEO
            ===================================================== */}

            <Helmet>

                <title>
                    Mart Academy - Digital Mastery
                </title>

                <meta
                    name="description"
                    content="Learn Computer Basics, Data Analysis, Programming, Web Design and ICT at Mart Academy. Build practical digital skills step by step."
                />

                <meta
                    name="keywords"
                    content="computer basics course Bangladesh, computer course, web design course, graphics design course, ICT course, data analysis course, online course Bangladesh, Mart Academy"
                />

                <meta
                    name="author"
                    content="Mart Academy"
                />

                {/* Open Graph */}

                <meta
                    property="og:title"
                    content="Mart Academy - Build Your Digital Skills"
                />

                <meta
                    property="og:description"
                    content="Learn practical digital skills with Mart Academy."
                />

                <meta
                    property="og:image"
                    content="https://i.ibb.co.com/CK4MGtGx/contest.gif"
                />

                <meta
                    property="og:url"
                    content="https://mart-academy.web.app/"
                />

                <meta
                    property="og:type"
                    content="website"
                />

                {/* Twitter */}

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

            </Helmet>


            {/* =====================================================
                HERO SECTION
            ===================================================== */}

            <section
                className="
                    relative
                    rounded-3xl
                    flex
                    items-center
                    overflow-hidden"
            >

                {/* ---------------------------------------------
                    Background Decoration
                --------------------------------------------- */}

                <div
                    className="
                        absolute
                        -top-32
                        -left-32
                        w-[420px]
                        h-[420px]
                        rounded-full
                        bg-teal-100/40
                        blur-3xl
                        animate-pulse
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -right-32
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-cyan-200/40
                        blur-3xl
                        animate-pulse
                    "
                />


                {/* Grid Background */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                        bg-[linear-gradient(#0f766e_1px,transparent_1px),linear-gradient(90deg,#0f766e_1px,transparent_1px)]
                        bg-[size:40px_40px]
                    "
                />


                {/* ---------------------------------------------
                    Hero Container
                --------------------------------------------- */}

                <div
                    className="
                        relative
                        z-10
                        w-11/12
                        lg:w-[95%]
                        mx-auto
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-12
                        items-center
                        pt-24
                        pb-16
                    "
                >

                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div
                        data-aos="fade-right"
                        data-aos-duration="900"
                    >

                        {/* Small Badge */}

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-teal-200
                                border
                                border-teal-200
                                text-purple-500
                                text-sm
                                mb-6
                            "
                        >

                            <span className="animate-pulse">
                                ●
                            </span>

                            Learn. Practice. Grow.

                        </div>


                        {/* Main Heading */}

                        <h1
                            className="
                                text-4xl
                                md:text-5xl
                                lg:text-6xl
                                font-black
                                text-gray-300
                            "
                        >

                            Build Your

                            <span
                                className="
                                    block
                                    text-transparent
                                    bg-clip-text
                                    bg-gradient-to-r
                                    from-teal-400
                                    to-cyan-500
                                    py-4
                                "
                            >
                                Digital Skills
                            </span>

                            With Mart Academy

                        </h1>


                        {/* Description */}

                        <p
                            className="
                                mt-6
                                max-w-xl
                                 text-transparent
                                    bg-clip-text
                                    bg-gradient-to-r
                                    from-teal-300
                                    to-purple-500
                                text-base
                                md:text-lg
                                leading-8
                            "
                        >

                            Computer Basics থেকে Web Design,
                            Data Analysis এবং ICT —
                            practical skill শিখুন step by step,
                            project ও real-life practice-এর মাধ্যমে।

                        </p>


                        {/* CTA Buttons */}

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-4
                                mt-8
                            "
                        >

                            <a
                                href="#courses"
                                className="
                                    px-7
                                    py-3.5
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-teal-400
                                    to-purple-700
                                    text-white
                                    font-bold
                                    shadow-lg
                                    shadow-teal-500/30
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                "
                            >
                                Explore Courses →
                            </a>


                            <a
                                href="#why-us"
                                className="
                                    px-7
                                    py-3.5
                                    rounded-xl
                                    border-2
                                    border-teal-200
                                    text-teal-400
                                    font-bold
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                "
                            >
                                Why Mart Academy?
                            </a>

                        </div>


                        {/* Statistics */}

                        <div
                            className="
                                grid
                                grid-cols-3
                                gap-6
                                max-w-md
                                mt-10
                                pt-6
                                border-t
                                border-gray-200
                            "
                        >

                            <div>

                                <h3
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-black
                                        text-transparent
                                    bg-clip-text
                                    bg-gradient-to-tl
                                    from-teal-400
                                    to-purple-400
                                    "
                                >
                                    10+
                                </h3>

                                <p className="text-xs text-gray-300 mt-1">
                                    Projects
                                </p>

                            </div>


                            <div>

                                <h3
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-black
                                       text-transparent
                                    bg-clip-text
                                    bg-gradient-to-br
                                    from-teal-200
                                    to-purple-600
                                    "
                                >
                                    100%
                                </h3>

                                <p className="text-xs text-gray-300 mt-1">
                                    Practical
                                </p>

                            </div>


                            <div>

                                <h3
                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-black
                                       text-transparent
                                    bg-clip-text
                                    bg-gradient-to-tr
                                    from-teal-300
                                    to-purple-600
                                    "
                                >
                                    24/7
                                </h3>

                                <p className="text-xs text-gray-300 mt-1">
                                    Learning
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT BANNER
                    ================================================= */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="relative"
                    >

                        {/* Floating Information Card */}

                        <div
                            className="
                                absolute
                                -top-6
                                -left-2
                                lg:-left-8
                                z-20
                                bg-white
                                rounded-2xl
                                shadow-xl
                                border
                                border-teal-50
                                px-4
                                py-3
                                float-animation
                            "
                        >

                            <p className="text-xs text-gray-500">
                                Start Learning
                            </p>

                            <p className="font-bold text-teal-600">
                                Your Future Starts Here 🚀
                            </p>

                        </div>


                        {/* Banner Container */}

                        <div
                            className="
                                relative
                                rounded-[2rem]
                                p-3
                                backdrop-blur
                                border
                                border-teal-100
                                shadow-2xl
                                shadow-teal-100
                            "
                        >

                            {
                                banner_data?.[0] && (
                                    <Banner
                                        img={banner_data[0].image}
                                    />
                                )
                            }

                        </div>

                    </div>

                </div>


                {/* Scroll Indicator */}

                <div
                    className="
                        absolute
                        bottom-2
                        left-[40%]
                        -translate-x-1/2
                        text-gray-400
                        animate-bounce
                    "
                >
                    ↓ Scroll to explore
                </div>

            </section>


            {/* =====================================================
                COURSES SECTION
            ===================================================== */}

            <section
                id="courses"
                className="
                    my-16
                "
            >

                <Title
                    title="Our Courses"
                />

                <SubTitle
                    title="Practical skills that you can use in real life"
                />


                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-10
                        mt-10
                    "
                >

                    {
                        courses?.map((course, index) => (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                className="
                                    hover:-translate-y-2
                                    transition-all
                                    duration-500
                                "
                            >

                                <Course
                                    course={course}
                                />

                            </div>

                        ))
                    }

                </div>

            </section>


            {/* =====================================================
                COURSE OVERVIEW
            ===================================================== */}

            <section
                className="
                    my-20
                "
            >

                <Title
                    title="Course Overview"
                />

                <SubTitle
                    title="Learn step by step with our well-structured courses"
                />


                {/* তোমার existing Timeline */}

                <Timeline
                    courses={courses}
                />

            </section>


            {/* =====================================================
                WHY MART ACADEMY
            ===================================================== */}

            <section
                id="why-us"
                className="
                    relative
                    py-20
                    bg-gray-950
                    text-white
                    rounded-3xl
                    overflow-hidden
                "
            >

                {/* Background Glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -left-40
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-teal-500/10
                        blur-3xl
                        slow-float
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-40
                        -right-40
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-cyan-500/10
                        blur-3xl
                        slow-float
                    "
                />


                <div
                    className="
                        relative
                        w-11/12
                        lg:w-10/12
                        mx-auto
                    "
                >

                    {/* Heading */}

                    <div className="text-center mb-12">

                        <p
                            className="
                                text-teal-400
                                font-bold
                                text-sm
                                tracking-widest
                            "
                        >
                            WHY MART ACADEMY
                        </p>


                        <h2
                            className="
                                text-3xl
                                md:text-4xl
                                font-black
                                mt-3
                            "
                        >
                            শুধু Course নয়, Skill তৈরি করুন
                        </h2>


                        <p
                            className="
                                text-gray-400
                                max-w-2xl
                                mx-auto
                                mt-5
                                leading-7
                            "
                        >
                            আমাদের লক্ষ্য শুধু certificate দেওয়া নয়।
                            বাস্তব জীবনে ব্যবহার করতে পারবেন এমন skill
                            তৈরি করা।
                        </p>

                    </div>


                    {/* Feature Cards */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-4
                            gap-6
                        "
                    >

                        {
                            [
                                {
                                    icon: "🎯",
                                    title: "Practical Learning",
                                    text: "Real-life task ও project-এর মাধ্যমে শেখানো।"
                                },

                                {
                                    icon: "💻",
                                    title: "Project Based",
                                    text: "শেখার পাশাপাশি নিজের portfolio তৈরি করুন।"
                                },

                                {
                                    icon: "🏆",
                                    title: "Contest",
                                    text: "Contest-এ অংশ নিয়ে skill test করুন এবং prize জিতুন।"
                                },

                                {
                                    icon: "🤝",
                                    title: "Support",
                                    text: "Learning journey-তে প্রয়োজনীয় support পান।"
                                }

                            ].map((item, index) => (

                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                    className="
                                        p-6
                                        rounded-2xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        backdrop-blur
                                        hover:bg-teal-500/10
                                        hover:border-teal-400/30
                                        hover:-translate-y-2
                                        transition-all
                                        duration-300
                                    "
                                >

                                    <div className="text-4xl mb-5">
                                        {item.icon}
                                    </div>


                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                        "
                                    >
                                        {item.title}
                                    </h3>


                                    <p
                                        className="
                                            text-gray-400
                                            mt-3
                                            text-sm
                                            leading-6
                                        "
                                    >
                                        {item.text}
                                    </p>

                                </div>

                            ))
                        }

                    </div>

                </div>

            </section>


            {/* =====================================================
                LEARNING JOURNEY
            ===================================================== */}

            <LearningJourney />


            {/* =====================================================
                CONTEST SECTION
            ===================================================== */}

            <section
                className="
                    my-10
                "
            >

                <Title
                    title="Become A Champion"
                    subtitle={
                        <>
                            Join{" "}

                            <span
                                className="
                                    bg-teal-200
                                    px-2
                                    py-1
                                    rounded-lg
                                    text-black
                                "
                            >
                                Contest
                            </span>

                            {" "} & Get {" "}

                            <span
                                className="
                                    bg-teal-200
                                    px-2
                                    py-1
                                    rounded-lg
                                    text-black
                                "
                            >
                                Money
                            </span>
                        </>
                    }
                />


                <div
                    data-aos="zoom-in"
                    className="
                        mt-8
                        rounded-3xl
                        overflow-hidden
                        border-2
                        border-teal-100
                        shadow-xl
                        shadow-teal-100
                        hover:scale-[1.01]
                        transition-transform
                        duration-500
                    "
                >

                    <img
                        className="
                            w-full
                            h-auto
                        "
                        src="https://i.ibb.co.com/CK4MGtGx/contest.gif"
                        alt="Mart Academy Contest"
                    />

                </div>

            </section>


            {/* =====================================================
                SUCCESS STORIES
            ===================================================== */}

            <section
                className="
                    my-20
                    overflow-hidden
                "
            >

                <Title
                    title="Success Stories"
                />

                <SubTitle
                    title="Our learners, their learning journey"
                />


                <div className="mt-8">

                    <Marquee
                        speed={45}
                        gradient={true}
                        gradientColor="teal"
                        gradientWidth={20}
                        pauseOnHover={true}
                    >

                        <Success_Story />

                    </Marquee>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}

            <section
                className="
                "
            >

                <Title
                    title="Frequently Asked Questions"
                />

                <SubTitle
                    title="আপনার মনে থাকা সাধারণ প্রশ্নগুলোর উত্তর"
                />


                <div className="mt-8">

                    <FAQ
                        faqs={faq_data}
                    />

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section
                className="
                    relative
                    my-16
                   
                    overflow-hidden
                    rounded-3xl
                    bg-gradient-to-r
                    from-teal-600
                    to-purple-600
                    text-white
                    p-10
                    md:p-16
                    text-center
                    animate-pulse
                "
            >

                {/* Decorative circles */}

                <div
                    className="
                        absolute
                        -top-20
                        -right-20
                        w-60
                        h-60
                        rounded-full
                        bg-white/10
                        slow-float
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-24
                        -left-20
                        w-60
                        h-60
                        rounded-full
                        bg-white/10
                        slow-float
                    "
                />


                <div className="relative z-10">

                    <h2
                        className="
                            text-3xl
                            md:text-4xl
                            font-black
                        "
                    >
                        আজ থেকেই আপনার Learning Journey শুরু করুন 🚀
                    </h2>


                    <p
                        className="
                            mt-4
                            text-teal-50
                            max-w-2xl
                            mx-auto
                            leading-7
                        "
                    >
                        একটি skill আপনার career এবং daily life—
                        দুটোই পরিবর্তন করতে পারে।
                    </p>


                    <a
                        href="#courses"
                        className="
                            inline-block
                            mt-7
                            px-8
                            py-3.5
                            bg-white
                            text-teal-700
                            rounded-xl
                            font-bold
                            shadow-lg
                            hover:scale-105
                            hover:shadow-xl
                            transition-all
                            duration-300
                        "
                    >
                        Start Learning →
                    </a>

                </div>

            </section>

        </div>
    );
};


export default Home;