import React, { useEffect, useRef } from "react";

const About = () => {
    const sectionRefs = useRef([]);

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("about-show");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    // ============================================
    // INSTRUCTORS
    // ============================================
    const instructors = [
        {
            name: "Instructor Name",
            designation: "Web Development Instructor",
            image: "https://i.ibb.co/placeholder-instructor.jpg",
            expertise: "React • JavaScript • Node.js",
            bio: "Focused on practical web development and helping learners build real-world projects.",
            facebook: "#",
            linkedin: "#",
        },
        {
            name: "Instructor Name",
            designation: "Graphics Design Instructor",
            image: "https://i.ibb.co/placeholder-instructor.jpg",
            expertise: "Graphics • Design • Creative Tools",
            bio: "Helping students develop creative skills through practical design-based learning.",
            facebook: "#",
            linkedin: "#",
        },
        {
            name: "Instructor Name",
            designation: "ICT & Computer Instructor",
            image: "https://i.ibb.co/placeholder-instructor.jpg",
            expertise: "Computer Basic • ICT • Office",
            bio: "Making computer education simple, practical and easy to understand for beginners.",
            facebook: "#",
            linkedin: "#",
        },
    ];

    // ============================================
    // MANAGEMENT TEAM
    // ============================================
    const managementTeam = [
        {
            name: "Management Name",
            designation: "Founder & CEO",
            image: "https://i.ibb.co/placeholder-management.jpg",
            bio: "Leading Mart Academy with a vision of making quality digital education accessible to everyone.",
        },
        {
            name: "Management Name",
            designation: "Director",
            image: "https://i.ibb.co/placeholder-management.jpg",
            bio: "Responsible for academic development, operations and maintaining the learning experience.",
        },
        {
            name: "Management Name",
            designation: "Academic Coordinator",
            image: "https://i.ibb.co/placeholder-management.jpg",
            bio: "Coordinating courses, instructors and student support to create a better learning environment.",
        },
    ];

    // ============================================
    // WHY MART ACADEMY
    // ============================================
    const features = [
        {
            icon: "🎓",
            title: "Expert Instructors",
            description:
                "Learn from instructors who focus on practical knowledge and real-world applications.",
        },
        {
            icon: "💻",
            title: "Live Classes",
            description:
                "Interactive live classes where students can learn, ask questions and practice.",
        },
        {
            icon: "🎬",
            title: "Recorded Classes",
            description:
                "Access recorded lessons and learn again whenever you need them.",
        },
        {
            icon: "🚀",
            title: "Real Projects",
            description:
                "Build practical projects that help transform your learning into useful skills.",
        },
        {
            icon: "📝",
            title: "Assignments",
            description:
                "Regular assignments help students practice concepts and improve their confidence.",
        },
        {
            icon: "🏆",
            title: "Certification",
            description:
                "Complete your course successfully and receive a certificate recognizing your learning.",
        },
    ];

    // ============================================
    // LEARNING PROCESS
    // ============================================
    const learningSteps = [
        {
            number: "01",
            title: "Learn",
            description: "Understand concepts through structured lessons.",
        },
        {
            number: "02",
            title: "Practice",
            description: "Practice what you learn with guided exercises.",
        },
        {
            number: "03",
            title: "Assignment",
            description: "Test your knowledge through practical assignments.",
        },
        {
            number: "04",
            title: "Project",
            description: "Apply your skills by building real-world projects.",
        },
        {
            number: "05",
            title: "Assessment",
            description: "Evaluate your progress and improve your weak areas.",
        },
        {
            number: "06",
            title: "Certification",
            description: "Complete your learning journey and earn your certificate.",
        },
    ];

    return (
        <div className="bg-base-100 text-base-content overflow-hidden">

            {/* ==================================================
                HERO PARALLAX
            ================================================== */}
            <section
                className="relative min-h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover rounded-t-2xl"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75 "></div>

                {/* Decorative circles */}
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal-400/10 blur-2xl"></div>
                <div className="absolute bottom-20 right-10 w-52 h-52 rounded-full bg-purple-500/10 blur-3xl"></div>

                <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">

                    <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-300/30 bg-white/10 backdrop-blur-md text-teal-200 text-sm">
                        <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
                        Welcome to Mart Academy
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        Learn Today.
                        <span className="block text-teal-300">
                            Build Tomorrow.
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Practical education, real projects and expert guidance
                        to help you build the skills you need for your future.
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="/"
                            className="btn border-none bg-teal-300 hover:bg-teal-400 text-black px-8"
                        >
                            Explore Courses
                        </a>

                        <a
                            href="#instructors"
                            className="btn btn-outline border-white/50 font-thin hover:bg-white hover:text-black text-white px-8"
                        >
                            Meet Our Team
                        </a>

                    </div>
                </div>

            </section>


            {/* ==================================================
                ABOUT MART ACADEMY
            ================================================== */}
            <section
                ref={addToRefs}
                className="about-hidden max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-20"
            >

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image */}
                    <div className="relative">

                        <div className="absolute -top-5 -left-5 w-full h-full border-2 border-teal-300/30 rounded-3xl"></div>

                        <img
                            src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Mart Academy"
                            className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
                        />

                        <div className="absolute -bottom-7 -right-5 md:right-8 bg-base-100 shadow-xl rounded-2xl p-5 border border-base-300">

                            <div className="text-3xl font-bold text-teal-300">
                                Learn
                            </div>

                            <div className="text-sm opacity-70">
                                Practice • Build • Grow
                            </div>

                        </div>
                    </div>


                    {/* Content */}
                    <div>

                        <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                            About Mart Academy
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
                            Education that turns
                            <span className="text-teal-300"> knowledge </span>
                            into skills.
                        </h2>

                        <p className="mt-6 text-base md:text-lg opacity-75 leading-8">
                            Mart Academy is an online learning platform focused on
                            practical computer and digital education. Our goal is to
                            make useful skills accessible to students, beginners,
                            professionals and anyone who wants to improve their
                            digital knowledge.
                        </p>

                        <p className="mt-4 opacity-70 leading-7">
                            We believe that learning should not stop at watching
                            lessons. Students should understand concepts, practice
                            them, complete assignments and apply their knowledge
                            through real-world projects.
                        </p>


                        {/* Mission Vision Values */}
                        <div className="grid sm:grid-cols-3 gap-4 mt-3">

                            <div className="p-5 rounded-2xl bg-base-200 border border-base-300 hover:-translate-y-1 transition duration-300">
                                <div className="text-2xl mb-2">🎯</div>
                                <h3 className="font-bold text-teal-300">
                                    Mission
                                </h3>
                                <p className="text-sm opacity-70 mt-2">
                                    Make practical education accessible.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-base-200 border border-base-300 hover:-translate-y-1 transition duration-300">
                                <div className="text-2xl mb-2">🔭</div>
                                <h3 className="font-bold text-teal-300">
                                    Vision
                                </h3>
                                <p className="text-sm opacity-70 mt-2">
                                    Build confident digital learners.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-base-200 border border-base-300 hover:-translate-y-1 transition duration-300">
                                <div className="text-2xl mb-2">💡</div>
                                <h3 className="font-bold text-teal-300">
                                    Values
                                </h3>
                                <p className="text-sm opacity-70 mt-2">
                                    Quality, practice and support.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* ==================================================
                WHY MART ACADEMY
            ================================================== */}
            <section
                ref={addToRefs}
                className="about-hidden bg-base-200 py-10 md:py-10"
            >

                <div className="max-w-7xl mx-auto px-5 md:px-10">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                            Why Mart Academy
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-3">
                            More than just
                            <span className="text-teal-300"> online classes.</span>
                        </h2>

                        <p className="mt-5 opacity-70 leading-7">
                            We focus on creating a complete learning experience
                            where students can learn, practice, build and grow.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-base-100 p-7 rounded-3xl border border-base-300 hover:border-teal-300/50 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-teal-300/10 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold mt-6">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 opacity-70 leading-7">
                                    {feature.description}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ==================================================
                PARALLAX 
            {/* ==================================================
                INSTRUCTORS
            ================================================== */}
            <section
                className="relative py-24 md:py-32 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1646579886135-068c73800308?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >

                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-5">

                    <div className="text-center max-w-3xl mx-auto -mt-16">

                        <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                            Our Instructors
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-3">
                            Learn from people who
                            <span className="text-teal-300"> know the field.</span>
                        </h2>

                        <p className="mt-5 opacity-70 leading-7">
                            Our instructors focus on practical learning and help
                            students develop skills that can be applied beyond the classroom.
                        </p>

                    </div>


                    <div id="instructors"
                        ref={addToRefs} className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

                        {instructors.map((instructor, index) => (

                            <div
                                key={index}
                                className="group bg-base-200 rounded-3xl overflow-hidden border border-base-300 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl"
                            >

                                {/* Image */}
                                <div className="relative overflow-hidden">

                                    <img
                                        src={instructor.image}
                                        alt={instructor.name}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    {/* Social */}
                                    <div className="absolute bottom-5 right-5 flex gap-2">

                                        <a
                                            href={instructor.facebook}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-teal-300 hover:text-black transition"
                                        >
                                            f
                                        </a>

                                        <a
                                            href={instructor.linkedin}
                                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-teal-300 hover:text-black transition"
                                        >
                                            in
                                        </a>

                                    </div>

                                </div>


                                <div className="p-7">

                                    <h3 className="text-2xl font-bold">
                                        {instructor.name}
                                    </h3>

                                    <p className="text-teal-300 font-medium mt-1">
                                        {instructor.designation}
                                    </p>

                                    <div className="mt-4 inline-block text-xs px-3 py-2 rounded-full bg-teal-300/10 text-teal-300">
                                        {instructor.expertise}
                                    </div>

                                    <p className="mt-5 opacity-70 leading-7">
                                        {instructor.bio}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>




            {/* ==================================================
                MANAGEMENT TEAM
            ================================================== */}
            <section
                ref={addToRefs}
                className="about-hidden bg-base-200 py-20 md:py-28"
            >

                <div className="max-w-7xl mx-auto px-5 md:px-10">

                    <div className="text-center max-w-3xl mx-auto">

                        <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
                            Management Team
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold mt-3">
                            The people behind
                            <span className="text-purple-400"> Mart Academy.</span>
                        </h2>

                        <p className="mt-5 opacity-70 leading-7">
                            A dedicated team working together to create a better
                            learning environment and support our students.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

                        {managementTeam.map((person, index) => (

                            <div
                                key={index}
                                className="group bg-base-100 rounded-3xl p-6 border border-base-300 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl"
                            >

                                <div className="flex items-center gap-5">

                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-24 h-24 rounded-2xl object-cover group-hover:scale-105 transition duration-500"
                                    />

                                    <div>

                                        <h3 className="text-lg font-bold">
                                            {person.name}
                                        </h3>

                                        <p className="text-purple-400 text-sm mt-1">
                                            {person.designation}
                                        </p>

                                    </div>

                                </div>

                                <div className="mt-6 border-t border-base-300 pt-5">

                                    <p className="opacity-70 leading-7 text-sm">
                                        {person.bio}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* ==================================================
                LEARNING PROCESS
            ================================================== */}
            <section
                ref={addToRefs}
                className="about-hidden max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28"
            >

                <div className="text-center max-w-3xl mx-auto">

                    <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">
                        Our Learning Approach
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        From learning to
                        <span className="text-teal-300"> real skills.</span>
                    </h2>

                    <p className="mt-5 opacity-70">
                        Our learning process is designed to move students from
                        understanding concepts to confidently applying them.
                    </p>

                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

                    {learningSteps.map((step, index) => (

                        <div
                            key={index}
                            className="relative p-7 rounded-3xl border border-base-300 bg-base-200 hover:border-teal-300/50 hover:-translate-y-2 transition-all duration-500"
                        >

                            <div className="text-5xl font-black text-teal-300/20">
                                {step.number}
                            </div>

                            <h3 className="text-2xl font-bold mt-2">
                                {step.title}
                            </h3>

                            <p className="mt-3 opacity-70 leading-7">
                                {step.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ==================================================
                FINAL PARALLAX CTA
            ================================================== */}
            <section
                className="relative py-10 md:py-20 bg-fixed bg-center bg-cover "
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >

                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-5">

                    <span className="text-teal-300 uppercase tracking-widest text-sm font-semibold">
                        Start Your Journey
                    </span>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 leading-tight">
                        Your Future Starts
                        <span className="text-teal-300"> With a Skill.</span>
                    </h2>

                    <p className="text-gray-200 mt-6 text-lg leading-8 max-w-2xl mx-auto">
                        Start learning today, build practical skills and take
                        your next step with Mart Academy.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 font-thin mt-9 ">

                        <a
                            href="/"
                            className="btn bg-teal-300 hover:bg-teal-400 border-none text-black px-9"
                        >
                            Explore Courses
                        </a>

                        <a
                            href="/contact-us"
                            className="btn btn-outline border-white text-white  hover:bg-white hover:text-black px-9"
                        >
                            Contact Us
                        </a>

                    </div>

                </div>
            </section>


            {/* ==================================================
                CUSTOM CSS
            ================================================== */}
            <style>{`

                html {
                    scroll-behavior: smooth;
                }

                .about-hidden {
                    opacity: 0;
                    transform: translateY(40px);
                    transition:
                        opacity 0.8s ease,
                        transform 0.8s ease;
                }

                .about-show {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Better parallax support */
                @media (max-width: 768px) {

                    .bg-fixed {
                        background-attachment: scroll !important;
                    }

                }

                /* Reduce motion for accessibility */
                @media (prefers-reduced-motion: reduce) {

                    html {
                        scroll-behavior: auto;
                    }

                    .about-hidden {
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }

                    .transition,
                    .transition-all,
                    .transition-transform {
                        transition: none !important;
                    }

                }

            `}</style>

        </div>
    );
};

export default About;