import React from 'react';
import Hero from '../Hero/Hero';
import HeroInfo from '../HeroInfo/HeroInfo';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCard></HomeCard>
            <HeroInfo></HeroInfo>
        </div>
    );
};

export default Home;