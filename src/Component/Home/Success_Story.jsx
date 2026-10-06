// import React from 'react';

import { useEffect, useState } from "react";
import usePublicAxios from "../../Hook/usePublicAxios";


// const Success_Story = () => {
//     return (
//         <div className='border-2 mr-10 border-teal-200 rounded-2xl p-2 bg-gray-100 '>
//             <div className="max-w-[290px] space-y-8 rounded-2xl px-6 py-8 shadow-md  bg-[#18181B] pt-16">
//                 {/* profile image & bg  */}
//                 <div className="relative">
//                     <img
//                         width={100}
//                         height={100}
//                         className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400 dark:border-[#18181B]"
//                         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
//                         alt="card navigate ui"
//                     />
//                 </div>
//                 {/* profile name & role */}
//                 <div className="space-y-1 pt-8 text-center">
//                     <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
//                     <p className="text-sm text-gray-400">Wordpress Web Development</p>
//                 </div>
//                 {/* profile description */}
//                 <div className="space-y-4 text-center">
//                     <p className="text-gray-500 dark:text-gray-400">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum
//                         cumque. Quisquam, asperiores. Doloribus, voluptatum cumque. Quisquam, asperiores.
//                     </p>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Success_Story;



// const Success_Story = () => {

//     const axios = usePublicAxios();
//     const [stories, setStories] = useState([]);

//     // fetch success stories from server
//     useEffect(() => {
//         const fetchSuccessStories = async () => {
//             try {
//                 const res = await axios.get("/story");
//                 // Process the fetched data
//                 if (res?.data) {
//                     setStories(res.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching success stories:", error);
//             }
//         };

//         fetchSuccessStories();
//     }, [axios]);


//     return (
//         <div className=" p-5 flex gap-5 items-center">
//             {
//                 stories.map((story) => (
//                     <div key={story._id} className="">
//                         <div className="carousel-item w-72 rounded-r-2xl  border border-teal-100 flex-col p-3">
//                             <img
//                                 src={story?.photo}
//                                 className="w-20 h-20 mx-auto my-5 ring-4 ring-offset-2 rounded-full"
//                                 alt={story?.user}
//                             />


//                             {/* profile name & role */}
//                             <div>
//                                 <div className="space-y-1  text-center">
//                                     <h1 className="text-base md:text-xl">{story?.user}</h1>
//                                     <p className="text-teal-400 text-sm">{story?.courseTitle}</p>
//                                 </div>
//                                 {/* profile description */}
//                                 <div className="text-right text-sm">
//                                     <p className="text-gray-500 p-2 dark:text-gray-400 h-28 overflow-y-auto"> {story?.story} </p>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default Success_Story;


const Success_Story = () => {
    const axios = usePublicAxios();

    const [stories, setStories] = useState([]);
    const [expandedStories, setExpandedStories] = useState({});

    // Different colors for different cards
    const storyColors = [
        "bg-[#BFE8D5]", // mint
        "bg-[#DCC9F4]", // lavender
        "bg-[#FFE0B2]", // peach
        "bg-[#C9E4F5]", // sky
        "bg-[#F5C6D6]", // pink
        "bg-[#DDE8B8]", // lime
        "bg-[#F6D6A8]", // sand
        "bg-[#C8D7F2]", // blue
    ];

    // Fetch stories
    useEffect(() => {
        const fetchSuccessStories = async () => {
            try {
                const res = await axios.get("/story");

                if (res?.data) {
                    setStories(res.data);
                }
            } catch (error) {
                console.error(
                    "Error fetching success stories:",
                    error
                );
            }
        };

        fetchSuccessStories();
    }, [axios]);

    // Read more / less
    const toggleStory = (id) => {
        setExpandedStories((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const getStoryText = (story) => {
        const isExpanded = expandedStories[story._id];

        if (
            !isExpanded &&
            story?.story?.length > 170
        ) {
            return `${story.story.substring(0, 170)}...`;
        }

        return story?.story;
    };

    return (
        <section className="py-10 px-3 bg-base-100 rounded-lg">

            {/* =====================================
                HEADER
            ====================================== */}
            <div className="max-w-6xl mx-auto mb-5">

                <p className="text-teal-500 text-xs md:text-sm font-semibold tracking-[4px] uppercase">
                    Student Stories
                </p>

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Stories that inspire{" "}
                        <span className="text-teal-400">
                            the next step.
                        </span>
                    </h2>

                    <p className="max-w-md text-sm text-gray-500 dark:text-gray-400">
                        Discover the experiences of learners
                        who started their journey with Mart Academy.
                    </p>

                </div>
            </div>


            {/* =====================================
                FIXED STORY AREA
            ====================================== */}
            <div
                className="
                    max-w-5xl
                    mx-auto

                    h-[400px]

                    overflow-y-auto

                    scroll-smooth
                    pr-2
                    scrollbar-thin
                    scrollbar-thumb-teal-300
                    scrollbar-track-transparent
                "
            >

                <div className="space-y-5 py-3">

                    {stories.map((story, index) => {

                        const isEven = index % 2 === 0;

                        const isExpanded =
                            expandedStories[story._id];

                        const isLong =
                            story?.story?.length > 170;

                        const cardColor =
                            storyColors[
                                index % storyColors.length
                            ];

                        return (
                            <div
                                key={story._id}
                                className={`
                                    flex
                                    ${
                                        isEven
                                            ? "justify-start"
                                            : "justify-end"
                                    }

                                    animate-[storyEnter_0.6s_ease-out]
                                `}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >

                                {/* =================================
                                    SMALL STORY CARD
                                ================================== */}
                                <article
                                    className={`
                                        group
                                        relative

                                        w-[92%]
                                        sm:w-[80%]
                                        md:w-[68%]
                                        lg:w-[65%]

                                        min-h-[200px]

                                        ${cardColor}

                                        rounded-[24px]

                                        shadow-[0_12px_35px_rgba(0,0,0,0.08)]

                                        px-6
                                        py-6

                                        transition-all
                                        duration-500
                                        animate-pulse
                                        hover:-translate-y-2
                                        hover:shadow-[0_20px_45px_rgba(0,0,0,0.13)]

                                        ${
                                            !isEven
                                                ? "md:mr-4"
                                                : "md:ml-4"
                                        }
                                    `}
                                >

                                    {/* Decorative quote */}
                                    <div
                                        className="
                                            absolute
                                            top-1
                                            left-5

                                            text-[75px]
                                            leading-none

                                            font-serif

                                            text-black/10

                                            transition-transform
                                            duration-500
                                            group-hover:-translate-y-1
                                        "
                                    >
                                        “
                                    </div>


                                    {/* =================================
                                        TOP
                                    ================================== */}
                                    <div className="relative flex justify-between items-start gap-3">

                                        {/* Location */}
                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-1.5

                                                text-xs
                                                text-gray-700

                                                bg-white/50

                                                px-3
                                                py-1.5

                                                rounded-full
                                            "
                                        >
                                            <span>
                                                📍
                                            </span>

                                            <span>
                                                {story?.location ||
                                                    "Bangladesh"}
                                            </span>
                                        </div>


                                        {/* Course */}
                                        <span
                                            className="
                                                text-[10px]
                                                font-semibold

                                                text-teal-700

                                                bg-white/60
                                                px-3
                                                py-1.5
                                                rounded-full
                                                truncate
                                            "
                                        >
                                            {story?.courseTitle}
                                        </span>

                                    </div>


                                    {/* =================================
                                        STORY
                                    ================================== */}
                                    <div className="relative mt-6">

                                        <p
                                            className="
                                                text-base
                                                md:text-lg

                                                font-serif

                                                leading-5

                                                text-gray-900
                                            "
                                        >
                                            {getStoryText(story)}
                                        </p>


                                        {isLong && (
                                            <button
                                                onClick={() =>
                                                    toggleStory(
                                                        story._id
                                                    )
                                                }
                                                className="
                                                    mt-2

                                                    text-xs

                                                    font-semibold

                                                    text-teal-700

                                                    hover:text-teal-900

                                                    underline
                                                    underline-offset-2
                                                "
                                            >
                                                {isExpanded
                                                    ? "Show less ↑"
                                                    : "Read more →"}
                                            </button>
                                        )}

                                    </div>


                                    {/* =================================
                                        BOTTOM PROFILE
                                    ================================== */}
                                    <div
                                        className="
                                            mt-2
                                            pt-2

                                            border-t
                                            border-black/10

                                            flex
                                            items-center
                                            justify-between

                                            gap-3
                                        "
                                    >

                                        {/* Student */}
                                        <div className="flex items-center gap-3">

                                            <div className="relative">

                                                <img
                                                    src={story?.photo}
                                                    alt={story?.user}
                                                    className="
                                                        w-10
                                                        h-10

                                                        rounded-full

                                                        object-cover

                                                        ring-3
                                                        ring-white

                                                        shadow-md

                                                        transition-transform
                                                        duration-300

                                                        group-hover:scale-110
                                                    "
                                                />

                                            </div>


                                            <div>

                                                <h3 className="text-sm font-bold text-black">
                                                    {story?.user}
                                                </h3>

                                                <p className="text-[11px] text-gray-600">
                                                    Mart Academy Student
                                                </p>
                                            </div>
                                        </div>


                                       
                                    </div>

                                </article>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Success_Story;