
import { useState } from 'react';
import faq from "../../assets/faq.png"
const FAQ = () => {
    const dataArr = [
        {
            title: 'How do I create an account?',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'What is your return policy?',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Can I change my shipping address?',
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        {
            title: 'Are there any discounts for loyal customers?',
            description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        }
    ];

    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse gap-10 items-center justify-center'>
            <div className=''>
                <img src={faq} alt="faq image" />
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




