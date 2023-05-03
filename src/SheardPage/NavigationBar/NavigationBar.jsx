import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=> console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-orange-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>RECIPE</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    PAGES
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>ORDER</a></li>
                            <li><a>BLOG</a></li>
                        </ul>
                    </div>
                    <img src="../../../public/assets/images/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-white ">
                        <li><Link to="/" >HOME</Link></li>
                        <li tabIndex={0}>
                            <a>
                                PAGES
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 text-gray-500">
                                <li><a>RECIPE 1</a></li>
                                <li><a>RECIPE 2</a></li>
                            </ul>
                        </li>
                        <li><a>ORDER</a></li>
                        <li><a>BLOG</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <UserCircleIcon className="h-10 w-10 text-blue-500 " />
                        <button onClick={handleLogOut} className="btn btn-xs">Logout</button>
                        </> : <a className="btn"><Link to="/login">Login</Link></a>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;