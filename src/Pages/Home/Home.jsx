import React from 'react';
import Hero from './Hero/Hero';
import Banner from './Banner/Banner';
import ChooseBook from './ChooseBook/ChooseBook';
import AnimatedSection from './AnimatedSection/AnimatedSection';


const Home = () => {
    return (
        <div className='max-w-7xl bg-gray-[#EAECED] mx-auto'>
            <Hero></Hero>
            <Banner></Banner>
            <ChooseBook></ChooseBook>
            <AnimatedSection></AnimatedSection>
            
            
        </div>
    );
};

export default Home;