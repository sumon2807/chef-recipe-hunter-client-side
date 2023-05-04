import React from 'react';

const Save = () => {
    return (
        <div className='bg-yellow-500'>
            <div className='grid lg:grid-cols-2 mx-8'>
                <div className='px-4 lg:my-32'>
                    <h2 className='text-4xl font-bold text-base-700 mb-4'>DOWNLOAD MOBILE APP AND</h2>
                    <h1 className='text-7xl font-extrabold text-rose-700'>SAVE UP TO 20%</h1>
                    <p className='lg:mt-8 lg:p-2 text-lg font-semibold text-base-700'>Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius</p>
                    <div className='flex gap-4 mt-4'>
                        <img className='w-50 h-20' src="../../../../public/assets/images/appstore.png" alt="" />
                        <img className='w-50 h-20' src="../../../../public/assets/images/googleplay.png" alt="" />
                    </div>
                </div>
                <div>
                    <img src="../../../../public/assets/images/e-shop.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Save;