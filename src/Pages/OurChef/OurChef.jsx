import React from 'react';
import { Link  } from 'react-router-dom';

const OurChef = ({ chef }) => {
    const { chefName,specialty,chefDetails,chefPhoto,likes,id } = chef
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={chefPhoto} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {chefName}
                    <div className="badge badge-secondary">Likes {likes}</div>
                </h2>
                <p>{chefDetails}</p>
                <p className='font-bold'>Specialty: {specialty}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline hover hover:bg-rose-600 hover:text-white"><Link to={`/viewrecipe/${id}`}>View Recipes</Link></div>
                </div>
            </div>
        </div>
    );
};

export default OurChef;