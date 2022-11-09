import React from 'react';

const HeroInfo = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Why</span>
                    </span>{' '}
                    You Should Trust FoodHunter?
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Fresh Food & Fast Service</h6>
                    <p className="text-sm text-gray-900">
                    We are a fully functioning restaurant and coffee shop with an extensive menu. Served 'market style' wrapped in paper and compostable containers, our meals are great for in shop or on-the-go.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Locally sourced & Downright delicious.</h6>
                    <p className="text-sm text-gray-900">
                    We source local and sustainably cultivated products as often as possible to ensure we’re offering our customers the highest quality selection available.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Online ordering</h6>
                    <p className="text-sm text-gray-900">
                        We allow online ordering around 50 miles. Also we provide free delivery if you order minimum 50$. Also, we have various payment methods
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Refund Policy</h6>
                    <p className="text-sm text-gray-900">
                        If you think that the food is rotten or unable to eat, you can feel free to cancel the order. Also you will get the refund. We have 100% trust on our chief.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Reservations</h6>
                    <p className="text-sm text-gray-900">
                        We allow reservation. You must confirm us before 10 hours and you have to advance 40% of total payment.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                        <svg
                            className="w-10 h-10 text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Social media</h6>
                    <p className="text-sm text-gray-900">
                        We are always active in social media. You can get the latest updates, new foods & special offers through our social channels.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroInfo;