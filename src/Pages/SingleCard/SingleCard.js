import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleCard = () => {
    const { name, category, instruction, info, time, price, img } = useLoaderData();

    return (
        <div className='lg:flex mb-10 justify-center gap-5'>
            <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 lg:w-full w-4/5 mx-auto md:mx-0">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img
                            src={img}
                            className="object-cover w-full h-80" />
                    </PhotoView>
                </PhotoProvider>

                <div class="p-6">
                    <div>
                        <h3 class="text-xs md:text-2xl font-medium text-blue-600 uppercase dark:text-blue-400">{name}</h3>

                        <p class="mt-2 text-sm md:text-base text-white">{info}</p>

                        <h3 class="text-xs md:text-2xl font-medium text-blue-600 uppercase dark:text-blue-400 mt-5">Ingredients</h3>

                        <p class="mt-2 text-sm md:text-base text-white">
                            {instruction}
                        </p>

                        <div class="p-1.5 w-full inline-block sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 mt-5">
                            <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                                <button class="w-full px-4 py-2 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Category: {category}
                                </button>

                                <button class="w-full px-4 py-1 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Cooking Time: {time}
                                </button>

                                <button class="w-full px-4 py-1 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Price: ${price}
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='columns-3 border-2 border-green-400'>
                <h1>This is review layout</h1>
            </div>
        </div>
    );
};

export default SingleCard;