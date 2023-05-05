import React from 'react';

const Discover = () => {
    return (
        <div>
            <div className='text-center my-12'>
                    <div>
                        <h1 className='text-7xl font-extrabold text-rose-700'>Discover</h1>
                        <h3 className='text-3xl font-bold mt-4 text-gray-700'>MOST FAMOUS RESTAURANT</h3>
                    </div>
                    <div className='grid lg:grid-cols-3 my-8'>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/tz4qYMv/Breakfast.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Breakfast</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas !</p>
                        </div>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/L8Zf9yp/Dinner.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Dinner</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas !</p>
                        </div>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="https://i.ibb.co/k2PB8PH/Lunch.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Lunch</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas!</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Discover;