import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, signup } from "../actions/authActions";

const AuthForm = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (match.path === "/login") {
            dispatch(login(email, password));
        } else {
            dispatch(signup(email, password));
        }
        history.push("/");
    }

    return (
        <div>
            <h2> {match.path === "/login" ? 
            "Login" : "Signup"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">
                {match.path === "/login" ? "Login": "Signup"}
                </button>
            </form>
        </div>
    );
}

export default AuthForm;