

const CourseDetailsHero = ({courseDetails}) => {
    return (
        <div >
            <div className="lg:h-40 space-y-3 text-center p-5">
                <h1 className="text-xl lg:text-3xl lg:w-3/5 mx-auto font-semibold lg:leading-loose">{courseDetails?.subtitle} <span className="bg-teal-200 p-1 px-4 rounded-xl text-black">Guide</span> </h1>
                <p className="lg:w-3/6 mx-auto border-b-2 pb-5 border-teal-200 animate-pulse">{courseDetails?.description}</p>
            </div>

            <section className="my-10 lg:my-32">
                <h1 className="text-xl lg:text-3xl font-semibold text-center">Next batch <span className="bg-teal-200 px-3 p-1 rounded-xl text-black">schedule</span></h1>

                <div className="flex flex-col text-black lg:flex-row justify-center items-center gap-5 mt-7 ">
                    <div className="bg-teal-200 p-5 rounded-lg text-center w-full md:max-w-md">
                        <h2 className="text-lg font-semibold">Present Batch</h2>
                        <p className="text-sm">Ends on: <span className="font-bold">{courseDetails?.summary?.batchEnd}</span></p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-lg text-center w-full md:max-w-md">
                        <h2 className="text-lg font-semibold">Admission </h2>
                        <p className="text-sm">Starts on: <span className="font-bold">{courseDetails?.summary?.admissionStart}</span></p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-lg text-center animate-pulse w-full md:max-w-md">
                        <h2 className="text-lg font-semibold">Next Batch</h2>
                        <p className="text-sm">Starts on: <span className="font-bold">{courseDetails?.summary?.newBatch}</span></p>
                    </div>

                </div>

                <div className="text-center my-10">
                    <button className="button btn text-lg">Enroll Now</button>
                </div>
            </section>
        </div>
    );
};

export default CourseDetailsHero;