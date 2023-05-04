import React from 'react';
import Story from './Story/Story';
import OurManu from './OurManu/OurManu';
import Save from './Discount/Save';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-4.jpg" className="w-full" />
                    <div className='absolute left-32 right-5 top-1/4 text-white'>
                        <h1 className='text-7xl font-extrabold font-serif text-rose-200'>CRISPY<br /> CHICKEN</h1>
                        <h3 className='text-5xl font-semibold mt-8'>ONLY <span className='text-yellow-400'>$7.65</span></h3>
                        <button className="btn btn-secondary btn-active mt-12 text-2xl font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline ">❮</a>
                        <a href="#slide2" className="btn btn-outline ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-5.jpg" className="w-full" />
                    <div className='absolute  right-32 top-1/4 text-white'>
                        <h1 className='text-7xl font-extrabold font-serif text-rose-200'>CHICKEN <br /> FINGERS</h1>
                        <h3 className='text-5xl font-semibold mt-8'>ONLY <span className='text-yellow-400'>$8.95</span></h3>
                        <button className="btn btn-secondary btn-active mt-12 text-2xl font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline ">❮</a>
                        <a href="#slide3" className="btn btn-outline ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-6.jpg" className="w-full" />
                    <div className='absolute left-32 top-1/4 text-white'>
                        <h1 className='text-7xl font-extrabold font-serif text-rose-200'>DOUBLE <br /> BURGER</h1>
                        <h3 className='text-5xl font-semibold mt-8'>ONLY <span className='text-yellow-400'>$8.95</span></h3>
                        <button className="btn btn-secondary btn-active mt-12 text-2xl font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline ">❮</a>
                        <a href="#slide4" className="btn btn-outline ">❯</a>
                    </div>
                </div>
            </div>
            <section>
                <div className='text-center my-12'>
                    <div>
                        <h1 className='text-7xl font-extrabold text-rose-700'>Discover</h1>
                        <h3 className='text-3xl font-bold mt-4 text-gray-700'>MOST FAMOUS RESTAURANT</h3>
                    </div>
                    <div className='grid lg:grid-cols-3 my-8'>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="../../../public/assets/images/Breakfast.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Breakfast</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas !</p>
                        </div>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="../../../public/assets/images/Dinner.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Dinner</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas !</p>
                        </div>
                        <div className='border rounded-lg shadow-lg py-8 mx-4'>
                            <div className='flex justify-center'>
                                <img src="../../../public/assets/images/Lunch.png" alt="" />
                            </div>
                            <h2 className='text-3xl font-bold text-gray-700'>Lunch</h2>
                            <p className='mt-4 px-8 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cum excepturi libero itaque quaerat. Ab quasi maiores minus quas!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Story></Story>
                <OurManu></OurManu>
                <Save></Save>
                <OurTeam></OurTeam>
            </section>
        </div>
    );
};

export default Home;