// OtpVerification.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OtpVerification.css';
import { useMediaQuery } from 'react-responsive';

const OtpVerification = ({ email = "user@example.com" }) => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);


        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const pasted = e.clipboardData.getData('text').slice(0, 6);
        if (!/^\d+$/.test(pasted)) return;

        const newOtp = pasted.split('');
        setOtp(newOtp);
        inputs.current[Math.min(pasted.length, 5)].focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const otpValue = otp.join('');

        if (otpValue.length < 6) return alert('Please enter otp');

        console.log('OTP submitted:', otpValue);
    };

    const time = 10
    const [seconds, setSeconds] = useState(time); 
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleResend = () => {
        setSeconds(time);
        setIsActive(true);
        
    };



    return (
        <div className="signup-wrapper">
            {!useMediaQuery({ query: "(max-width: 500px)" }) && (
                <div className="signup-left-panel">
                    <a href="/">
                        <span className="signup-brand">Education</span>
                    </a>
                </div>
            )}

            <div className="signup-card">
                <h1>Verify OTP</h1>
                <p className="forgot-subtitle">
                    Please enter the OTP sent to your e-mail <strong>{email}</strong> to complete your verification
                </p>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="otp-container">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                className="otp-input"
                            />
                        ))}
                    </div>

                    <footer className='footer'>
                        <p className="footer-text">
                            Remaining time:{' '}
                            <span
                                className="resend-link"
                            >
                                <time>{Math.floor(seconds / 60)}:
                                    {(seconds % 60).toString().padStart(2, '0')}</time>
                            </span>
                        </p>
                        <p className="footer-text">
                            Don't got the code? {' '}
                            <span
                                className="resend-link"
                                onClick={ handleResend}
                            >
                                Resend
                            </span>
                        </p>
                    </footer>

                    <input type="submit"  value="Verify OTP" className="btn-submit" />


                    <Link to="/forgot-password">
                        <p className="btn-back">
                            <span>Back</span>
                        </p>
                    </Link>

                </form>


            </div>
        </div>
    );
};

export default OtpVerification;