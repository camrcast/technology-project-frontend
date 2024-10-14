import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import LoginForm from "../../components/LoginForm";
import fetch from "../../utilities/fetch";

interface props {
    setUser: Function,
}

function Login({setUser}: props) {

    const navigate = useNavigate();
    const [error, setError] = useState();

    async function login(username: string, password: string) {
        try {
            const {token, user} = await fetch("post", "/users/login", {username, password});
            localStorage.setItem("token", token);
            setUser(user);
            setTimeout(() => {
                navigate("/"); // Don't use window.location otherwise the page refreshes
            }, 3000)
        } catch (err: any) {
            setError(err.error); 
        }
    }

    return (
        <main>
            <h1>Log In</h1>
            <LoginForm onSubmit={login} error={error}/>
        </main>
    )
}

export default Login;