import React from 'react';
import Title from '../../Component/Share/Title';
import SubTitle from '../../Component/Share/SubTitle';
import Banner from '../../Component/Home/Banner';
import Course from '../../Component/Share/Course';
import Timeline from '../../Component/Home/Timeline';
import FAQ from '../../Component/Share/FAQ';
import Success_Story from '../../Component/Home/Success_Story';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet-async';
import useBanner from '../../Hook/useBanner';
import Loading from '../../Component/Share/Loading';
import useFaq from '../../Hook/useFaq';
import useCourses from '../../Hook/useCourses';


const Home = () => {

    // hook for  data
    const [banner_data, isLoading] = useBanner();
    const [faq_data] = useFaq();
    const [courses] = useCourses();



    //loading spinner
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>

            {/* seo meta */}

            <Helmet>
                <title>Mart Academy -Digital Mastery</title>
                <meta
                    name="description"
                    content="Learn computer basics, graphics, web development, and ICT at Mart Academy. Build your digital mastery with expert-led online courses."
                />
                <meta
                    name="keywords"
                    content="computer basics course, graphics design course, web development course, ICT training, online courses Bangladesh"
                />
                <meta name="author" content="Mart Academy" />

                {/* Open Graph for social media */}
                <meta property="og:title" content="Mart Academy - Learn Computer Basics, Graphics & Web" />
                <meta
                    property="og:description"
                    content="Join Mart Academy and master Computer Basics, Graphics, Web Development, and ICT with our affordable online courses."
                />
                <meta property="og:image" content="https://i.ibb.co.com/CK4MGtGx/contest.gif" />
                <meta property="og:url" content="http://hideous-ray.surge.sh/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            {/* end meta */}

            {/* Banner Section */}
            {

                banner_data?.map((banner, index) => (
                    <section key={index} className='flex flex-col items-center justify-center mt-24'>
                        <Title title={banner.title}></Title>
                        <SubTitle title={banner.subtitle}>
                        </SubTitle>
                        <Banner img={banner.image}></Banner>
                    </section>
                )
                )

            }

            <section className='my-10'>
                <Title title="Our Courses"></Title>

                <div className='grid mt-7 grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16'>
                    {
                        courses?.map((course, index) => <Course key={index} course={course}></Course>)
                    }
                </div>
            </section>

            <section className='my-16'>
                <Title title="Course_Overview"></Title>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16'>
                    <Timeline courses={courses}></Timeline>
                </div>
            </section>
            <section className='my-16'>
                <Title title="Become_ A _ Champion" subtitle={<>Join <span className='bg-teal-200 p-1 rounded-xl text-black'>Contest</span> & Get <span className='bg-teal-200 p-1 rounded-xl text-black'>Money</span> </>}></Title>

                <div className='border-2 mt-4 border-teal-200 lg:h-[580px]  rounded-2xl'>
                    <img className='w-full h-full' src="https://i.ibb.co.com/CK4MGtGx/contest.gif" alt="" />
                </div>
            </section>
            <section className='my-16'>
                <Title title="Success_Story"></Title>

                <Marquee className='my-10 ' speed={50} gradient={true} gradientColor='teal' gradientWidth={50} pauseOnHover={true}>
                    <Success_Story></Success_Story>
                    <Success_Story></Success_Story>
                    <Success_Story></Success_Story>
                    <Success_Story></Success_Story>


                </Marquee>



            </section>
            <section className='my-16'>
                <Title title="FAQ"></Title>
                <FAQ faqs={faq_data}></FAQ>
            </section>
        </div>
    );
};




export default Home;