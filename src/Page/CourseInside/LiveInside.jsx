import { useState } from "react";
import { Link } from "react-router-dom";


const LiveInside = () => {
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className="cursor-pointer space-y-7 w-full h-96 overflow-y-auto p-2">
            {dataArr.map((data, idx) => (
                <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center w-full">
                    {/* the index div  */}
                    <div className="flex size-16 select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                        <span>{idx + 1}</span>
                    </div>

                    <div className="relative h-[2px] w-6 bg-teal-300">
                        <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                        <span className="h-1 w-10 bg-teal-200"></span>
                        <span className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}></span>
                    </div>

                    {/* main accordion div  */}
                    <div className=" w-full">
                        <div className="relative  border-t-[12px] border-teal-400 bg-base-100  p-3 shadow-md">
                            <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                            <h1 className="select-none  text-left">{data.title}</h1>
                        </div>
                        <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden ">
                                <p className="p-2 text-sm text-white">Believe you can and you're halfway there.</p>
                                <Link to={data.description} className=" underline block p-2 text-sm text-white">{data.description}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveInside;

//fake data
const dataArr = [
    {
        title: 'Module 1 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 2 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 3 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 4 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 5 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
  
    {
        title: 'Module 6 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 7 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 8 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 9 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 10 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 11 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 12 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },
    {
        title: 'Module 13 - Compueter Basic',
        description: 'https://meet.google.com/gso-nryd-awm'
    },

];