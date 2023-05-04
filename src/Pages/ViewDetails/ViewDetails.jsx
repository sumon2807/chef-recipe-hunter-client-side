import React from 'react';

const ViewDetails = () => {
    return (
        <div className='relative'>
            <img className='fluid w-full ' src="../../../public/assets/images/banner10.jpg" alt="" />
                <div className='absolute left-0 top-16 text-center'>
                    <div className='grid lg:grid-cols-2 justify-between gap-6 mx-8'>
                        <div>
                            <img className='w-96 h-96 fluid rounded' src="../../../public/assets/images/burger1.jpg" alt="" />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-bold text-5xl mb-8'>Cook Your Desh</h1>
                            <p><span className='font-semibold'>Cooking method:</span></p>
                            <p><span className='font-semibold'>Ingredients:</span></p>
                            <p><span className='font-semibold'>Favorite:</span></p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ViewDetails;