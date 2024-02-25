import React, { useState } from "react";
import "../styles/Login.scss";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form"
            onSubmit={handleSubmit}>
                <input type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => 
                setEmail(e.target.value)} />

                <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => 
                setPassword(e.target.value)} />
                <button type="submit">Login
                </button>
            </form>
        </div>
    );
};

export default Login;