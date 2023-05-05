import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='lg:my-8 text-center'>
            <div className='flex justify-center'>
                <img src="https://i.ibb.co/gjvBz0T/logo.png" alt="" />
            </div>
            <div className='flex justify-center gap-8 mt-4'>
                <FaFacebookF className='text-3xl hover:text-rose-700' />
                <FaTwitter className='text-3xl hover:text-rose-700' />
                <FaInstagram className='text-3xl hover:text-rose-700' />
                <FaYoutube className='text-3xl hover:text-rose-700' />
                <FaPinterestP className='text-3xl hover:text-rose-700' />
            </div>
            <div className="flex justify-center gap-4 mt-6 ">
                <a className="link link-hover hover:text-rose-700 font-bold">ABOUT US |</a>
                <a className="link link-hover hover:text-rose-700 font-bold">MANU |</a>
                <Link to="/order"><p className="link link-hover hover:text-rose-700 font-bold">ORDER NOW |</p></Link>
                <a className="link link-hover hover:text-rose-700 font-bold">GIFT CARDS |</a>
                <a className="link link-hover hover:text-rose-700 font-bold">CONTACTS</a>
            </div>
            <h2 className='pt-4'>© 2023 Testo. All Rights Reserved</h2>
        </div>
    );
};

export default Footer;