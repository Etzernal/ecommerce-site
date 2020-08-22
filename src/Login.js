import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        // Stops refresh 
        event.preventDefault();
        // do login logics
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                // logged in, redirect to home 
                history.push("/");
            })
            .catch((e) => alert(e.message))
    };

    const register = (event) => {
        // Stops refresh 
        event.preventDefault();
        // do login logics
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // created, redirect to home 
                history.push("/");
            })
            .catch((e) => alert(e.message))
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png'
                alt=''
                />
            </Link>
            <div className='login_container'>
                <h1> Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type='email'/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type='password'/>
                    <button className='login_signinButton' type='submit' onClick={login}> Sign In</button>
                </form>

                <p>
                    By signing in you agree to conditions of yadayada cookies whatever notice blablabla
                </p>
                <button className='login_registerButton' onClick={register}> Create your Account</button>
                
            </div>
            
        </div>
    );
}

export default Login;