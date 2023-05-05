import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurChef from '../../OurChef/OurChef';

const OurTeam = () => {
    const [chefs, setChefs]=useState([]);
    console.log(chefs)
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <div className='lg:mx-8 my-16'>
                <div className='text-center mb-8'>
                    <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>Our Team</h1>
                    <h3 className='text-3xl font-bold text-gray-700 mb-4'>MEET WITH OUR COOK</h3>
                </div>
            </div>
            <div>
                {
                    chefs.map(chef=> <OurChef
                    key={chef.id}
                    chef={chef}
                    >
                        <Link to={`/ourchef/${chef.id}`}></Link>
                    </OurChef>)
                }
            </div>
        </div>
    );
};

export default OurTeam;