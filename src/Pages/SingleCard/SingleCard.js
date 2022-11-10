import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReview from './SingleReview';

const SingleCard = () => {
    const { name, category, instruction, info, time, price, img, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);


    // console.log(reviews);
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsbyid?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setRefresh(!refresh);
            })
    }, [_id, refresh])


    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const rtext = form.rtext.value;

        const reviewData = {
            rname: user.displayName,
            remail: user.email,
            rtext,
            rimg: user.photoURL,
            serviceId: _id
        }
        console.log(reviewData);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }



    return (
        <div className='lg:flex mb-10 justify-center gap-5'>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 lg:w-full w-4/5 mx-auto md:mx-0">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img referrerPolicy="no-referrer"
                            alt=''
                            src={img}
                            className="object-cover w-full h-80" />
                    </PhotoView>
                </PhotoProvider>

                <div className="p-6">
                    <div>
                        <h3 className="text-xs md:text-2xl font-medium text-blue-600 uppercase dark:text-blue-400">{name}</h3>

                        <p className="mt-2 text-sm md:text-base text-white">{info}</p>

                        <h3 className="text-xs md:text-2xl font-medium text-blue-600 uppercase dark:text-blue-400 mt-5">Ingredients</h3>

                        <p className="mt-2 text-sm md:text-base text-white">
                            {instruction}
                        </p>

                        <div className="p-1.5 w-full inline-block sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700 mt-5">
                            <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                                <button className="w-full px-4 py-2 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Category: {category}
                                </button>

                                <button className="w-full px-4 py-1 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Cooking Time: {time}
                                </button>

                                <button className="w-full px-4 py-1 text-white md:text-xl md:font-medium transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 ">
                                    Price: ${price}
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <form onSubmit={handleReview} className='columns-3 w-96 flex flex-col'>
                <div className=''>
                    {user?.email ?
                        <div>
                            <div className='flex flex-col justify-center'>
                                <input type="text" name='rtext' placeholder="Type here" className="input input-bordered input-success w-full mx-auto max-w-xs mb-2 mt-2 text-center" />
                                <button type='submit ' className="btn  w-2/6 mx-auto btn-active btn-primary">Submit</button>

                            </div>
                            <div>
                                <div>
                                    {
                                        reviews.map(review => <SingleReview
                                            key={review._id}
                                            review={review}
                                        ></SingleReview>)
                                    }
                                </div>
                            </div>
                        </div>
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
            </form>
        </div>
    );
};

export default SingleCard;