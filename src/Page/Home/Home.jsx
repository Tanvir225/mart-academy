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

                <div className='grid mt-7 grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-10'>
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