import React from 'react';

const OurTeam = () => {
    return (
        <div className='lg:my-12 lg:mx-4'>
            <div className='text-center mb-8'>
                <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>Our Team</h1>
                <h3 className='text-3xl font-bold text-gray-700 mb-4'>MEET WITH OUR COOK</h3>
            </div>
            <div className='grid lg:grid-cols-4 my-8 gap-4'>
                <div className='border rounded-xl shadow-xl p-4'>
                    <img className='rounded-lg' src="../../../../public/assets/images/chef1-removebg-preview.png" alt="" />
                    <div className='flex justify-between mt-4'>
                        <h3 className='font-semibold'>Name</h3>
                        <button className='btn btn-outline btn-success btn-xs'>View Recipes</button>
                    </div>
                </div>
                <div className='border rounded-xl shadow-xl p-4'>
                    <img className='rounded-lg' src="../../../../public/assets/images/chef3-removebg-preview.png" alt="" />
                    <div className='flex justify-between mt-4'>
                        <h3 className='font-semibold'>Name</h3>
                        <button className='btn btn-outline btn-success btn-xs'>View Recipes</button>
                    </div>
                </div>
                <div className='border rounded-xl shadow-xl p-4'>
                    <img className='rounded-lg' src="../../../../public/assets/images/chef2-removebg-preview.png" alt="" />
                    <div className='flex justify-between mt-4'>
                        <h3 className='font-semibold'>Name</h3>
                        <button className='btn btn-outline btn-success btn-xs'>View Recipes</button>
                    </div>
                </div>
                <div className='border rounded-xl shadow-xl p-4'>
                    <img className='rounded-lg' src="../../../../public/assets/images/chef4-removebg-preview.png" alt="" />
                    <div className='flex justify-between mt-4'>
                        <h3 className='font-semibold'>Name</h3>
                        <button className='btn btn-outline btn-success btn-xs'>View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;