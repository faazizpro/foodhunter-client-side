import React from 'react';

const HomeCardLists = ({ trifood }) => {
    const {name, info, price, img} = trifood;

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
                                    info.length > 100 ? info.slice(0,100) :
                                    info
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCardLists;