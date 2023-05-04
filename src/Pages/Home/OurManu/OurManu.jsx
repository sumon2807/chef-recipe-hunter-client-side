import React from 'react';

const OurManu = () => {
    return (
        <div className='lg:my-12 lg:mx-4'>
            <div className='text-center mb-8'>
                <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>Our Menu</h1>
                <h3 className='text-3xl font-bold text-gray-700 mb-4'>EXPLORE OUR FOODS</h3>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='border rounded-lg p-4 shadow-lg'>
                    <img className='rounded-xl' src="../../../../public/assets/images/burger-17.jpg" alt="" />
                    <h2 className="text-xl font-bold mt-4 transi">Merguez Sausage Bread <br /><span className='text-rose-700'>$66.70</span> </h2>
                    <p className=' font-semibold'>chef name</p>
                </div>
                <div className='border rounded-lg p-4 shadow-lg'>
                    <img className='rounded-xl' src="../../../../public/assets/images/img-01.jpg" alt="" />
                    <h2 className="text-xl font-bold mt-4">Merguez Sausage Bread <br /> <span className='text-rose-700'>$66.70</span> </h2>
                    <p className=' font-semibold'>chef name</p>
                </div>
                <div className='border rounded-lg p-4 shadow-lg'>
                    <img className='rounded-xl' src="../../../../public/assets/images/burger-15.jpg" alt="" />
                    <h2 className="text-xl font-bold mt-4">Merguez Sausage Bread <br /><span className='text-rose-700'>$66.70</span> </h2>
                    <p className=' font-semibold'>chef name</p>
                </div>
                <div className='border rounded-lg p-4 shadow-lg'>
                    <img className='rounded-xl' src="../../../../public/assets/images/img-02.jpg" alt="" />
                    <h2 className="text-xl font-bold mt-4">Cheken Fingers <br /><span className='text-rose-700'>$66.70</span> </h2>
                    <p className=' font-semibold'>chef name</p>
                </div>
            </div>
        </div>
    );
};

export default OurManu;