import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OurChef = ({chef}) => {
    const chefs=useLoaderData();
    console.log(chefs)
    return (
        <div>
            <h2>our shefsis here...... </h2>
        </div>
    );
};

export default OurChef;