import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {UserCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn, googleSignIn, user, githubSignIn}=useContext(AuthContext)

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

        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            form.reset();
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
                        <div className="form-control mt-2">
                            <button className="btn btn-primary mb-2">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mb-2">
                                <UserCircleIcon className="h-8 w-8 text-blue-500 " />Google Login
                            </button>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline btn-info">
                                <UserCircleIcon className="h-8 w-8 text-blue-500 " />GitHub Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;