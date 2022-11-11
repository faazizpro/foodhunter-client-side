import React, { useContext, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const MyReview = () => {
    const { user } = useContext(AuthContext);

    const [allreview, setAllReviews] = useState([]);
    // console.log(allreview);

    useEffect(() => {
        fetch(`https://y-ashy-seven.vercel.app/reviewsbyemail?remail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [user?.email])
    return (
        <div className='w-11/12 mx-auto'>
           
                {
                    allreview.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }

        </div>
    );
};

export default MyReview;