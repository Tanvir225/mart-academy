import CourseCard from "./CourseCard";


const Courses = () => {
    return (
        <section className="my-10 space-y-5">
            <section>
                <h1 className="text-2xl font-bold text-center leading-loose lg:leading-loose ">What you know matters .
                    What you <span className="bg-teal-200 text-black p-1 rounded-xl">learn</span> ,<br />
                    you carry <span className="bg-teal-200 text-black p-1 rounded-xl">forever</span> .
                </h1>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-7  w-full">
                <CourseCard></CourseCard>
            
            </section>

        </section>
    );
};

export default Courses;