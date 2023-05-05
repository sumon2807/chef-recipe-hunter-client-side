import React, { useEffect, useState } from 'react';
import Story from './Story/Story';
import OurManu from './OurManu/OurManu';
import Save from './Discount/Save';
import OurTeam from './OurTeam/OurTeam';
import Discover from '../Discover/Discover';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-4.jpg" className="w-full" />
                    <div className='absolute left-20 lg:left-32 right-5 top-1/4 text-white'>
                        <h1 className='text-2xl lg:text-7xl font-extrabold font-serif text-rose-200'>CRISPY<br /> CHICKEN</h1>
                        <h3 className='lg:text-5xl font-semibold mt-4 lg:mt-8'>ONLY <span className='text-yellow-400'>$7.65</span></h3>
                        <button className="btn btn-secondary lg:mt-12 lg:text-2xl lg:font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline ">❮</a>
                        <a href="#slide2" className="btn btn-outline ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-5.jpg" className="w-full" />
                    <div className='absolute right-20 lg:right-32 top-1/4 text-white'>
                        <h1 className='text-2xl font-bold lg:text-7xl lg:font-extrabold font-serif text-rose-200'>CHICKEN <br /> FINGERS</h1>
                        <h3 className='lg:text-5xl font-semibold mt-4 lg:mt-8'>ONLY <span className='text-yellow-400'>$8.95</span></h3>
                        <button className="btn btn-secondary  lg:mt-12 lg:text-2xl lg:font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline ">❮</a>
                        <a href="#slide3" className="btn btn-outline ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="../../../public/assets/images/slide-6.jpg" className="w-full" />
                    <div className='absolute left-20 lg:left-32 top-1/4 text-white'>
                        <h1 className=' text-2xl lg:text-7xl font-bold lg:font-extrabold font-serif text-rose-200'>DOUBLE <br /> BURGER</h1>
                        <h3 className='lg:text-5xl font-semibold mt-4 lg:mt-8'>ONLY <span className='text-yellow-400'>$8.95</span></h3>
                        <button className="btn btn-secondary lg:mt-12 lg:text-2xl lg:font-extrabold">Buy Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline ">❮</a>
                        <a href="#slide4" className="btn btn-outline ">❯</a>
                    </div>
                </div>
            </div>
            <section>
                <Discover></Discover>
                <Story></Story>
                <div className='lg:mx-8 my-16'>
                    <div className='text-center mb-8'>
                        <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>Our Menu</h1>
                        <h3 className='text-3xl font-bold text-gray-700 mb-4'>EXPLORE OUR FOODS</h3>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        categories.map(category => <OurManu
                            key={category.id}
                            category={category}
                        ></OurManu>)
                    }
                    </div>
                </div>
                <Save></Save>
                <OurTeam></OurTeam>
            </section>
        </div>
    );
};

export default Home;