import React, { useContext, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const [error, setError]=useState('');
    const {signIn, googleSignIn, user, githubSignIn}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname || '/';

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.user;
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }

    const handleGitHubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            const loggedUser=result.user;
        })
        .catch(error=>{
            console.log('error', error.message)
        })
    }

    const handleLogin=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password)

        setError('');
        if(!email){
            setError('Please input valid email address')
        }
        else if(password.length < 6){
            setError('Password must be 6 cheracters or longer')
        }
        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Login !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link">Forgot password?</a>
                            </label>
                            <label className="label">
                            <Link to="/register">
                            <a href="#" className="label-text-alt link ">New to Testo? Please Register</a>
                            </Link>
                            </label>
                        </div>
                        <p className='text-red-400'>{error}</p>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline btn-info mb-2"><Link to="/">Login</Link></button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-2">
                                <FaGoogle className="h-6 w-6 text-blue-500  mx-2"/> Google Login
                            </button>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline btn-info">
                                <FaGithub className="h-6 w-6 text-blue-500  mx-2"/>GitHub Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;