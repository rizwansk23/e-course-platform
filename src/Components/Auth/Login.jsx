import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import './Login.css';
import Input from './Input';


function Login() {
    const [email, setEmail] = useState('')
    const [Password, setpassword] = useState('')

    const isMobile = useMediaQuery({ query: '(max-width : 500px )' });

    const handelsubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className="login-wrapper">
            {!isMobile && (
                <div className="login-left-panel">
                    <a href="/">
                        <span className="login-brand">Education</span>
                    </a>
                </div>
            )}

            <div className="login-card">
                <h1 className="login-title">Welcome back</h1>

                <form onSubmit={handelsubmit} className="login-form">
                    <Input 
                    Label={'E-mail'}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input 
                    Label={'password'}
                    Type={'password'}
                    ispassword
                    HelperText={'password must be 6 letter'}
                    value={Password}
                    onChange={(e) => setpassword(e.target.value)}
                    />

                    <div className="login-options-row">
                        <div className="remember-group">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me.</label>
                        </div>
                        <Link to={'/forgot-password'} className="forgot-link">
                            Forget Password
                        </Link>
                    </div>

                    <input type="submit" value="Login" className="btn-submit" />

                    <div className="btn-google">
                        <img src="/public/logo512.png" alt="logo" />
                        <a href="https://www.google.com/">
                            Sign in with Google
                        </a>
                    </div>
                </form>

                <p className="login-footer">
                    create a new account?{' '}
                    <Link to={'/signup'}>sign up</Link>
                </p>
            </div>
        </div>

    );
}

export default Login