import React from 'react';
import Title from '../../Component/Share/Title';
import SubTitle from '../../Component/Share/SubTitle';
import Banner from '../../Component/Home/Banner';
import Course from '../../Component/Share/Course';

const Home = () => {
    return (
        <div>
            <section className='flex flex-col items-center justify-center mt-24'>
                <Title title="Learn a Programming Language"></Title>
                <SubTitle title="The Gateway to Endless Innovation Get Started">
                </SubTitle>
                <Banner></Banner>
            </section>
            <section className='my-10'>
                <Title title="Our Courses"></Title>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                    <Course></Course>
                </div>
            </section>
        </div>
    );
};

export default Home;