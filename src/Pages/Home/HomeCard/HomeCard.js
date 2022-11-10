import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCardLists from './HomeCardLists';

const HomeCard = () => {
    const [foodsList, setFoodsList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods?limit=3')
            .then(res => res.json())
            .then(data => setFoodsList(data))
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
                        Top 3 Dishes
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        As you have trust on us. See our top 3 most selling dishes of all time.
                    </p>
                </div>

                </div>
            <div>
                <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2 w-3/4 mx-auto">
                {
                    foodsList.map(trifood => <HomeCardLists
                        key={trifood._id}
                        trifood={trifood}
                    ></HomeCardLists>)
                }
                </div>

                <Link to='/allmenu'
                    class="group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-1 my-3 w-40 mx-auto transition-colors hover:bg-transparent focus:outline-none focus:ring text-center"

                >
                    <span
                        class="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                    >
                        See All
                    </span>

                    <span
                        class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
                    >
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default HomeCard;