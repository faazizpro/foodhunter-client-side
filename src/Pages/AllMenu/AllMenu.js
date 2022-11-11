import React, { useEffect, useState } from 'react';
import AllMenuItems from './AllMenuItems';

const AllMenu = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://y-ashy-seven.vercel.app/foods?_limit=3')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <div className="px-4 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">FoodHunter's</span>
                        </span>{' '}
                        Favorite Dishes
                    </h2>
                </div>

            </div>
            <div></div>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2 w-3/4 mx-auto'>
                {
                    foods.map(food => <AllMenuItems
                        key={food._id}
                        food={food}
                    ></AllMenuItems>)
                }
            </div>
        </div>
    );
};

export default AllMenu;