// import React from 'react';

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



const Success_Story = () => {
    return (
        <div className=" p-5">
            <div className="carousel rounded-box  gap-5">
                <div className="carousel-item w-72 rounded-r-2xl  border border-teal-100 flex-col p-3">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        className="w-20 h-20 mx-auto my-5 ring-4 ring-offset-2 rounded-full" />

                    {/* profile name & role */}
                    <div>
                        <div className="space-y-1  text-center">
                            <h1 className="text-base md:text-xl">Shiyam Sarker</h1>
                            <p className="text-teal-400 text-sm">Wordpress Web Development</p>
                        </div>
                        {/* profile description */}
                        <div className="text-right text-sm">
                            <p className="text-gray-500 p-2 dark:text-gray-400 h-28 overflow-y-auto"> Dignissimos, natus. Nam fugiat quisquam </p>
                        </div>
                    </div>

                </div>
                <div className="carousel-item w-72 border rounded-r-2xl border-teal-100 flex-col p-3">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        className="w-20 h-20 mx-auto my-5  ring-4 ring-offset-2  rounded-full" />

                    {/* profile name & role */}
                    <div>
                        <div className="space-y-1  text-center">
                            <h1 className="text-base md:text-xl">Shiyam Sarker</h1>
                            <p className="text-teal-400 text-sm">Wordpress Web Development</p>
                        </div>
                        {/* profile description */}
                        <div className="text-right text-sm">
                            <p className="text-gray-500 p-2 dark:text-gray-400 h-28 overflow-y-auto"> Dignissimos, natus. Nam fugiat quisquam </p>
                        </div>
                    </div>

                </div>

                  <div className="carousel-item w-72 border rounded-r-2xl border-teal-100 flex-col p-3">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        className="w-20 h-20 mx-auto my-5  ring-4 ring-offset-2  rounded-full" />

                    {/* profile name & role */}
                    <div>
                        <div className="space-y-1  text-center">
                            <h1 className="text-base md:text-xl">Shiyam Sarker</h1>
                            <p className="text-teal-400 text-sm">Wordpress Web Development</p>
                        </div>
                        {/* profile description */}
                        <div className="text-right text-sm ">
                            <p className="text-gray-500 p-2  dark:text-gray-400 h-28 overflow-y-auto"> Di Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia deleniti nihil dolor nobis, praesentium id earum qui nostrum porro?</p>
                        </div>
                    </div>

                </div>

                  <div className="carousel-item w-72 border rounded-r-2xl border-teal-100 flex-col p-3">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                        className="w-20 h-20 mx-auto my-5  ring-4 ring-offset-2  rounded-full" />

                    {/* profile name & role */}
                    <div>
                        <div className="space-y-1  text-center">
                            <h1 className="text-base md:text-xl">Shiyam Sarker</h1>
                            <p className="text-teal-400 text-sm">Wordpress Web Development</p>
                        </div>
                        {/* profile description */}
                        <div className="text-right text-sm">
                            <p className="text-gray-500 p-2 dark:text-gray-400 h-28 overflow-y-auto"> Dignissimos, natus. Nam fugiat quisquam </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Success_Story;