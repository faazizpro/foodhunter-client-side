import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviewers from './Reviewers';

const SingleReview = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { remail, rtext, rimg, _id } = review;
    const [allreview, setAllReviews] = useState([]);
    // console.log(allreview);

    useEffect(() => {
        fetch('http://localhost:5000/allreview')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])


    return (
        <div>
            {user?.uid ?
                <>
                    {
                        allreview.map(review => <Reviewers
                            key={review._id}
                            review={review}
                        ></Reviewers>)
                    }
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