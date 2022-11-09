import React from 'react';
import './Hero.css';
import food1 from '../../../Asset/food1.jpg';
const Hero = () => {
    return (
        <div className='hero-bg'>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt="Party"
                                src={food1}
                                className="absolute inset-0 h-full w-full object-cover" />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">FoodHunter</h2>
                            <h2 className="text-sm font-bold md:text-xl">A place of kingdom where you can eat whatever you want!</h2>

                            <p className="mt-4 text-gray-8  00 font-medium    ">
                                FoodHunter is a USA based restaurant where you can get turkish, veg, non-veg, beef, soup and 100+ different categories. We started our journey at 1985 and achieved multiple awards from USA President for quality food.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Hero;