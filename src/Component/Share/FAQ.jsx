
import { useState } from 'react';

const FAQ = () => {
    const dataArr = [
        {
            "title": "What courses are available at Mart Academy?",
            "description": "We offer online courses in Computer Basics, Graphics Design, Web Development, and ICT. All courses are designed for beginners and intermediate learners."
        },
        {
            "title": "Do I need prior experience to join?",
            "description": "No prior experience is required. Our Computer Basics course starts from zero and gradually progresses to advanced topics."
        },
        {
            "title": "How can I enroll in a course?",
            "description": "Sign up on our website, select the course you want, and complete the registration process. You will then get instant access to the course materials."
        },
        {
            "title": "Can I win a prize by participating in Mart Academy contests?",
            "description": "Yes! We regularly organize contests related to our courses. If you win, you can earn exciting prize money and certificates."
        },
        {
            "title": "Is there any support if I face difficulties during the course?",
            "description": "Absolutely! Our instructors and support team are available to help you with any course-related questions or technical issues."
        }
    ];

    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse gap-10 items-center justify-center'>
            <div className=''>
                <img src='https://i.ibb.co.com/TxPxpPbm/faq.png' alt="faq image" />
            </div>
            <div className=" cursor-pointer space-y-6 mt-10">
                {dataArr.map((data, idx) => (
                    <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                        {/* the index div  */}
                        <div className="flex  p-3  select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                            <span>0{idx + 1}</span>
                        </div>

                        <div className="relative h-[2px] w-10 bg-zinc-700">
                            <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                            <span className="h-1 w-10 bg-zinc-700"></span>
                            <span className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}></span>
                        </div>

                        {/* main accordion div  */}
                        <div className="text-center">
                            <div className="relative  border-t-[12px] border-zinc-700 bg-teal-200 p-3 shadow-md">
                                <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                                <h1 className="select-none  text-zinc-700">{data.title}</h1>
                            </div>
                            <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className=" bg-zinc-700 p-6 text-sm text-white">{data.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;




