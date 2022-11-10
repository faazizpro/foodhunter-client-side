import React, { useEffect, useState } from 'react';
import Reviewers from './Reviewers';

const SingleReview = ({review}) => {
    const { remail, rtext, rimg, _id} = review;
    const [allreview, setAllReviews ] = useState([]);
    // console.log(allreview);

    useEffect( ()=>{
        fetch('http://localhost:5000/allreview')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    } , [])


    return (
        <div>
            <div>
                {
                    allreview.map(review => <Reviewers
                        key={review._id}
                        review={review}
                    ></Reviewers>)
                }
            </div>

        </div>
    );
};

export default SingleReview;