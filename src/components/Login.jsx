import React, { useState, useRef } from 'react'
import Header from './Header.jsx'
import { checkValidData } from '../utils/validate.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.jsx';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.jsx';
import { BG_URL, USER_Avatar } from '../utils/constants.jsx';


const Login = () => {
    const [isSignInform, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInform) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL:USER_Avatar
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                        
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                  
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInform);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_URL}
                    alt='logo' className='h-screen w-screen object-cover bg-gradient-to-b from-black'
                />
            </div>

            <form onSubmit={(e) => e.preventDefault()}
                className='w-full md:w-3/12 absolute p-12 bg-black my-[50%] md:my-24 mx-auto right-0 left-0 text-white rounded-md bg-opacity-65'>
                <h1 className='font-bold text-2xl md:text-3xl py-4'>{isSignInform ? "Sign In" : "Sign Up"}</h1>
                {!isSignInform && (
                    <input ref={name}
                        type="text" placeholder='Full Name' className='p-4 w-full rounded-md my-2  bg-gray-700 focus:outline-none focus:ring focus:ring-blue-200' />
                )}

                <input ref={email}
                    type="text" placeholder='Email Address' className='p-4 w-full rounded-md my-2  bg-gray-700 focus:outline-none focus:ring focus:ring-blue-200' />

                <input ref={password}
                    type="password" placeholder='Password' className='p-4 w-full rounded-md my-2 bg-gray-700 focus:outline-none focus:ring focus:ring-blue-200' />

                <p className='text-red-500 py-2 text-lg font-bold'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-4 my-8 bg-red-600 font-bold w-full rounded-md hover:bg-red-800'>{isSignInform ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInform ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login