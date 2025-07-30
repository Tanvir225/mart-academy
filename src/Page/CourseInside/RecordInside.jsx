import { useState } from "react";
import { Link } from "react-router-dom";


const RecordInside = () => {
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className="cursor-pointer space-y-7 w-full h-96 overflow-y-auto px-2">
            {dataArr.map((data, idx) => (
                <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center w-full">
                    {/* the index div  */}
                    <div className="flex size-10 select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                        <span>{idx + 1}</span>
                    </div>

                    <div className="relative h-[2px] w-4 bg-teal-300">
                        <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                        <span className="h-1 w-10 bg-teal-200"></span>
                        <span className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}></span>
                    </div>

                    {/* main accordion div  */}
                    <div className=" w-full">
                        <div className="relative  border-t-[12px] border-teal-400 bg-base-100  p-3 shadow-md">
                            <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                            <h1 className="select-none  text-left  text-[12px] md:text-base">{data.title}</h1>
                        </div>
                        {
                            data.description.map((item, itemIdx) => (
                                <div key={itemIdx} className={`grid overflow-hidden  text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden   border-dashed border rounded border-teal-200 border-b-0 ">
                                        <p className=" text-[12px] md:text-base p-3 text-white">{item.title}</p>
                                        <Link to={item.description} className="p-3  -mt-3 underline block  text-[12px] md:text-sm text-white">{item.description}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecordInside;

//fake data
const dataArr = [
    {
        title: 'Module 1 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 2 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 3 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 4 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 5 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 6 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },
    {
        title: 'Module 7 - Compueter Basic',
        description: [
            {
                title: 'Computer Word',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 2',
                description: 'https://meet.google.com/gso-nryd-awm'
            },
            {
                title: 'Computer Word 3',
                description: 'https://meet.google.com/gso-nryd-awm'
            }
        ]
    },


];