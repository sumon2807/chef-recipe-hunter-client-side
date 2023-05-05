import React from 'react';
import { Link } from 'react-router-dom';

const OurManu = ({ category }) => {
    const { chefName, recipePhoto,chefDetails } = category;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={recipePhoto} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chefName}</h2>
                        <p>{chefDetails}</p>
                        <div className="card-actions justify-between mt-2">
                            <span className='text-2xl text-rose-700 font-bold'>$13.65</span>
                            <Link to="/order"><button className="btn btn-primary">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
    );
};

export default OurManu;