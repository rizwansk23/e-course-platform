// Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'
import { useMediaQuery } from 'react-responsive';
import Input from './Input';

const Signup = () => {


    const [Name, setName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');

    const isMobile = useMediaQuery({ query: "(max-width : 500px )" });

    const handlesubmit = (e) => {
        e.preventDefault();
    };
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
                <h1>SignUp</h1>

                <form onSubmit={handlesubmit} className="signup-form">
                    <Input
                        Label="Name"
                        Type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        Label="E-mail"
                        Type="text"
                        name="E-mail"
                        value={email}
                        onChange={(e) => setemail(e.target.value)} />
                    <Input
                        Label="Password"
                        Type="password"
                        HelperText="Password must be 8 character"
                        ispassword
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <Input
                        Label="Phone Number"
                        Type="Number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />
                    <input type="submit" value="Sign Up" className="btn-submit" />
                </form>

                <p className="signup-footer">
                    Already have an account?
                    <Link to={"/login"}>
                        <span> Sign in</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;