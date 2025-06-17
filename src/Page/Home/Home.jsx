import React from 'react';
import Title from '../../Component/Share/Title';
import SubTitle from '../../Component/Share/SubTitle';
import Banner from '../../Component/Home/Banner';

const Home = () => {
    return (
        <div>
            <section className='flex flex-col items-center justify-center mt-24'>
                <Title title="Learn a Programming Language"></Title>
                <SubTitle title="The Gateway to Endless Innovation Get Started">
                </SubTitle>
                <Banner></Banner>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;