import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext=createContext(null);

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    
    const googleSignIn=()=>{
        setUser();
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn=()=>{
        setUser();
        return signInWithPopup(auth, githubProvider)
    }

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth);
    }
// observe on state change
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log('auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        setUser,
        googleSignIn,
        githubSignIn,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;