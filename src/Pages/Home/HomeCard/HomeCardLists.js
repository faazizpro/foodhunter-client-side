import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HomeCardLists = ({ trifood }) => {
    const { name, info, price, img, category
    } = trifood;

    return (
        <div>
            <div
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2">
                <div className="flex flex-col h-full">
                    <img
                        src={img}
                        className="object-cover w-full h-48"
                        alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                            <h6 className="mb-2 font-semibold leading-5">
                                {name}
                            </h6>
                            <p className="text-sm md:text-base font-medium text-gray-900">
                                {
                                    info.length > 100 ? info.slice(0, 100) :
                                        info
                                }
                            </p>
                        </div>
                        <div class="p-1.5 w-full inline-block sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                                <button class="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Price: ${price}
                                </button>

                                <button class="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Type: {category}
                                </button>

                                <Link>
                                    <button class="w-full px-4 py-1 text-black transition-colors duration-300 transform bg-white rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40 lg:text-xl font-bold">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        
        </div>
    );
};

export default HomeCardLists;