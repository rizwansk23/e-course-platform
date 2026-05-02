import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import { useMediaQuery } from 'react-responsive';
import Input from './Input';

const ForgotPassword = () => {
    const [email, setemail] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log('Reset link sent to:', email);
    };

    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });

    return (
        <div className="signup-wrapper">
            {!isMobile && (
                <div className="signup-left-panel">
                    <a href="/">
                        <span className="signup-brand">Education</span>
                    </a>
                </div>
            )}

            <div className="signup-card">
                <h1>Forgot Password</h1>
                <p className="forgot-subtitle">
                    Enter your email and we'll send you a reset link
                </p>

                <form onSubmit={handlesubmit} className="signup-form">
                    <Input
                        Label="E-mail"
                        Type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <input type="submit" value="Send Reset Link" className="btn-submit" />
                </form>

                <p className="signup-footer">
                    Remember your password?
                    <Link to="/login">
                        <span> Sign in</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;