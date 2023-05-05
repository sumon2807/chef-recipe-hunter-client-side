import React from 'react';

const Story = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-4'>
            <div>
                <img className='rounded-xl' src="https://i.ibb.co/dtfS8Lv/our-story.jpg" alt="" />
            </div>
            <div className='text-center p-8'>
                <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>Our Story</h1>
                <h3 className='text-3xl font-bold text-gray-700 mb-4'>THE PERFECT THE LIFE AND FOOD.</h3>
                <p className='mt-16 p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus harum sequi dolore possimus, quod consectetur commodi. Similique expedita maiores, quaerat quae repellendus ipsa? Labore consectetur atque exercitationem magnam quis.</p>
                <button className='btn btn-secondary'>Read More</button>
            </div>
        </div>
    );
};

export default Story;