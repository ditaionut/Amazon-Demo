import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassowrd(email, password)
        .then((auth) => {
            // login redirect to homepage
            history.push("/")
        })
        .catch((e) => alert(e.message));
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //create user and logged in
            history.push("/")
        })
        .catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button type="submit" className="login__signInButton" onClick={login}>Sign in</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and interest-Based Ads Notice.</p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
