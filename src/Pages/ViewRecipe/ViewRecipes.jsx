import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ViewRecipes = () => {
    const recipes=useLoaderData({});
    console.log(recipes)
    const {recipeName,chefName,yearsOfExperience,specialRecipeNumber,ratings}=recipes;
    return (
        <div className='flex justify-between my-16 mx-4'>
            <div>
                <div className='flex justify-center items-center'>
                    <img className='w-32 h-32 rounded-full' src="../../../public/assets/images/user.png" alt="" />
                    <div className='mx-4 mt-8'>
                        <h2 className='text-xl font-bold'>{chefName}</h2>
                        <p>Special recipes: {specialRecipeNumber}</p>
                        <p>Years of experience: {yearsOfExperience}</p>
                    </div>
                </div>
                <div className='text-center border rounded shadow-lg mt-10 p-8 lg:w-96'>
                    <h2 className='font-bold text-2xl'>Contact</h2>
                    <div className='flex justify-center gap-4 mt-4'>
                        <FaFacebookF className='text-xl hover:text-rose-700' />
                        <FaTwitter className='text-xl hover:text-rose-700' />
                        <FaInstagram className='text-xl hover:text-rose-700' />
                        <FaYoutube className='text-xl hover:text-rose-700' />
                        <FaPinterestP className='text-xl hover:text-rose-700' />
                    </div>
                </div>
            </div>
            <div className='m-8'>
                <h1 className='text-3xl font-bold'>James colins's Recipes</h1>
                <div className='grid grid-cols-2 gap-4 mt-8'>
                    <div className='flex rounded shadow-lg'>
                        <img className='w-36 h-36 rounded-lg' src="https://i.ibb.co/QNG7389/blog-4.jpg" alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>{recipeName}</h2>
                            <p><span className='font-semibold'>Rating: {ratings}</span></p>
                            <Link to="/recipeDetails"><button className='btn btn-outline btn-xs'>View Details</button></Link>
                        </div>
                    </div>
                    <div className='flex rounded shadow-lg'>
                        <img className='w-36 h-36 rounded-lg' src="https://i.ibb.co/4JFwwsH/img-01.jpg" alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Beef Massaman Soup Marroc Style</h2>
                            <p>Ratings..</p>
                            <Link to="/recipeDetails"><button className='btn btn-outline btn-xs'>View Details</button></Link>
                        </div>
                    </div>
                    <div className='flex rounded shadow-lg'>
                        <img className='w-36 h-36 rounded-lg' src="https://i.ibb.co/vh0NnTm/img-02.jpg" alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Beef Massaman Soup Marroc Style</h2>
                            <p>Ratings..</p>
                            <Link to="/recipeDetails"><button className='btn btn-outline btn-xs'>View Details</button></Link>
                        </div>
                    </div>
                    <div className='flex rounded shadow-lg'>
                        <img className='w-36 h-36 rounded-lg' src="https://i.ibb.co/HB4G8M6/blog-1.jpg" alt="" />
                        <div className='px-4'>
                            <h2 className='text-xl font-bold'>Beef Massaman Soup Marroc Style</h2>
                            <p>Ratings..</p>
                            <Link to="/recipeDetails"><button className='btn btn-outline btn-xs'>View Details</button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewRecipes;
