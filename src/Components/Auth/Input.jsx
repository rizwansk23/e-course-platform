import React, { useState } from "react";
import "./Input.css";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ Label, Type, value, onChange , HelperText, ispassword = false }) => {
    const isPassword = ispassword;
    const [open, setopen] = useState(!isPassword);
    const [type, settype] = useState("password");


    return (
        <div className="body">
            <label htmlFor="input" className="label">
                {Label}
            </label>
            <div className="input-box">
                <input id="input"
                    type={isPassword ? type : Type}
                    placeholder={Label}
                    value={value}
                    onChange={onChange} />
                {isPassword ? open ? (
                    <Eye className="eye"
                        size={20}
                        onClick={() => {
                            setopen(!open);
                            settype("text");
                        }} />
                ) : (
                    <EyeOff className="eye"
                        size={20}
                        onClick={() => {
                            setopen(!open);
                            settype("password");
                        }} />
                ) : null}
            </div>
            {HelperText ? <h2 className="helper">{HelperText}</h2> : null}
        </div>
    );
};

export default Input;
