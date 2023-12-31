import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    // const [userProfile, updateUserProfile]=useContext(AuthContext);
    const {user, createUser, updateUserProfile}=useContext(AuthContext);
    const [error, setError]=useState('');

    const handleRegister=event=>{
        event.preventDefault();

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        const name=form.name.value;
        const photo=form.photo.value;
        setError('')
        if(password !==confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 charecters or longer')
        }

        createUser(email, password)
        .then(result=>{
            const loggedUser=result.user;
            loggedUser.displayName=name;
            loggedUser.photoURL=photo;
            
            console.log(loggedUser)
            updateUserProfile({
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
                console.log(loggedUser)
                
            })
            .catch(error=>console.log(error))
            form.reset();
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Register </h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" name='password' placeholder="Passwoed" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Password" className="input input-bordered" required/>
                            <label className="label">
                            <Link to="/login">
                            <a href="#" className="label-text-alt link ">Already Have Account? Please Login</a>
                            </Link>
                            </label>
                        </div>
                        <p className='text-red-400'>{error}</p>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;