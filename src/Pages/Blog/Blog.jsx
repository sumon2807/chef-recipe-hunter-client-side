import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='lg:mx-8 my-16'>
            <div className='text-center mb-8'>
                <h1 className='text-7xl font-extrabold text-rose-700 mb-4'>OUR BLOG</h1>
                <h3 className='text-3xl font-bold text-gray-700 mb-4'>MEET WITH OUR COOK</h3>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Differences between uncontrolled and controlled components</h2>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/">Back to home</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How to validate React props using PropTypes</h2>
                        <p>React PropTypes validators
                            any : The prop can be of any data type.
                            bool : The prop should be a Boolean.
                            number : The prop should be a number.
                            string : The prop should be a string.
                            func : The prop should be a function.
                            array : The prop should be an array.
                            object : The prop should be an object.
                        </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/">Back to home</Link></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Difference between nodejs and express js</h2>
                    <p>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/">Back to home</Link></button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">differences between uncontrolled and controlled components</h2>
                    <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to="/">Back to home</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Blog;