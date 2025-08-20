

const CourseCurriculm = ({ courseDetails }) => {
    return (
        <section className="my-10 lg:my-16">
            <h1 className="text-xl lg:text-3xl font-semibold text-center">Course <span className="bg-teal-200 px-3 p-1 rounded-xl text-black">curriculum</span></h1>
            <div className="bg-teal-200 border-2 my-10  rounded-lg w-full mb-3 sticky top-0">
                <h2 className="text-lg font-semibold text-black p-4  ">Course Modules</h2>
            </div>
            <div className=" w-full text-white relative h-96 overflow-y-auto p-3 space-y-5 font-semibold">
                {courseDetails?.modules?.map((module, index) => (

                    <div key={index} className="bg-gray-900 hover:text-teal-200 p-5  rounded-lg  w-full">
                        <h2 className=" font-semibold">Module {module?.module} : {module?.title}</h2>
                        <p className="text-sm text-gray-400 mt-1">{module?.description}</p>
                    </div>
                ))}


            </div>
        </section>
    );
};

export default CourseCurriculm;



                