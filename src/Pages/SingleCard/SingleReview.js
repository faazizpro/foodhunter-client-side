import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleReview = ({ review }) => {
    const { user } = useContext(AuthContext);

    const { rname, remail, rtext, rimg, _id } = review;
    console.log(review);
    // console.log(allreview);

    // useEffect(() => {
    //     fetch('http://localhost:5000/allreview')
    //         .then(res => res.json())
    //         .then(data => setAllReviews(data))
    // }, [])


    return (
        <div>
            {user?.uid ?
                <>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img referrerPolicy="no-referrer"
                                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={rimg} />
                        </div>

                        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{rname}</h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-200">{rtext}</p>

                    </div>
                </>
                :


                <>
                    <div className="card w-96 bg-neutral text-neutral-content mt-5">
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title">You have to login to give review</h2>
                            <div className="card-actions justify-end">
                                <Link to='/login'><button className="btn btn-primary ">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </>
            }




        </div>
    );
};

export default SingleReview;