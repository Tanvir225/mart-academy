const LearningJourney = () => {

    const steps = [
        {
            number: "01",
            icon: "🎯",
            title: "Choose Your Course",
            description:
                "আপনার প্রয়োজন অনুযায়ী একটি course নির্বাচন করুন।"
        },
        {
            number: "02",
            icon: "📚",
            title: "Learn Step by Step",
            description:
                "সহজভাবে structured lessons অনুসরণ করে শিখুন।"
        },
        {
            number: "03",
            icon: "💻",
            title: "Practice",
            description:
                "Assignment, task এবং project-এর মাধ্যমে practice করুন।"
        },
        {
            number: "04",
            icon: "🚀",
            title: "Build & Grow",
            description:
                "নিজের skill কাজে লাগিয়ে portfolio ও career growth শুরু করুন।"
        }
    ];


    return (

        <section className="
            my-16  
             bg-gradient-to-l
                    from-teal-600
                    to-purple-600
                    p-10
                    rounded-3xl
        ">

            <div className="
               
            ">

                <div className="text-center">

                    <p className="
                        text-teal-300
                        font-bold
                        text-sm
                        animate-pulse
                    ">
                        YOUR LEARNING JOURNEY
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-black
                        text-gray-900
                        mt-2
                    ">
                        শেখার পথটা হবে সহজ ও Practical
                    </h2>

                    <p className="
                        text-gray-200
                        max-w-2xl
                        mx-auto
                        mt-4
                    ">
                        শুধু video দেখা নয় —
                        Learn → Practice → Build → Grow
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                    mt-12
                ">

                    {
                        steps.map((step, index) => (

                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                className="
                                    relative
                                    rounded-3xl
                                    p-7
                                    border
                                    border-teal-100
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="
                                    flex
                                    justify-between
                                    items-start
                                    
                                ">

                                    <div className="text-4xl animate-pulse">
                                        {step.icon}
                                    </div>

                                    <span className="
                                        text-4xl
                                        font-black
                                        text-teal-200
                                        animate-bounce
                                    ">
                                        {step.number}
                                    </span>

                                </div>


                                <h3 className="
                                    text-xl
                                    font-bold
                                    text-gray-800
                                    mt-6
                                ">
                                    {step.title}
                                </h3>


                                <p className="
                                    text-sm
                                    text-gray-200
                                    leading-7
                                    mt-3
                                ">
                                    {step.description}
                                </p>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default LearningJourney;