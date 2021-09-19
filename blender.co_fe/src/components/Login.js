import React, { useState }from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

import { firebaseConfig } from './firebase';


const auth = getAuth();

function Login() {
    const history = useHistory();
    const [email , setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className= 'login'>
            <Link to ='/'>
                <img 
                className="loginlogo"
                src='https://i.ibb.co/7ntfxQP/blender-Logo.png' 

                />
            </Link>

            <div className="Login_Title">
                Blender.Co: <b>B</b>lockchain <b>Lender</b> <b>Co</b>mpanion
            </div>

            <div className='logincontainer'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <button onClick={register} className='login__registerButton'>Create your Blender.Co Account</button>

            </div>
        </div>
    );
}

export default Login