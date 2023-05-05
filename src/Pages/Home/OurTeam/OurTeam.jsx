import React, { useEffect, useState } from 'react';
import OurChef from '../../OurChef/OurChef';

const OurTeam = () => {
    const [chefs, setChefs]=useState([]);
    useEffect(()=>{
        fetch(`https://b7a10-chef-recipe-hunter-server-side-sumon2807.vercel.app/categories`)
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
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    chefs.map(chef=> <OurChef
                    key={chef.id}
                    chef={chef}
                    >
                    </OurChef>)
                }
            </div>
        </div>
    );
};

export default OurTeam;