import React from 'react';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='max-w-7xl bg-gray-[#EAECED] mx-auto'>
            <Hero></Hero>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;