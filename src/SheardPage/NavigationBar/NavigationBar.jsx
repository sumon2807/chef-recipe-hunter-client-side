import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=> console.log(error))
    }

    return (
        <div className="navbar bg-orange-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>RECIPE</a></li>
                            <li tabIndex={0}> <a className="justify-between">MANU</a></li>
                            <li><Link to="/order">ORDER</Link></li>
                            <li><a>BLOG</a></li>
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/gjvBz0T/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-white ">
                        <li><Link to="/" >HOME</Link></li>
                        <li tabIndex={0}><a>MANU</a></li>
                        <li><Link to="/order">ORDERS</Link></li>
                        <li><a>BLOG</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full mx-2'/>
                        <button onClick={handleLogOut} className="btn btn-xs">Logout</button>
                        </> : <button className='btn btn-outline btn-primary'><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>
    );
};

export default NavigationBar;