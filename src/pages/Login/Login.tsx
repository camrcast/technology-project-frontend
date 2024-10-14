import React, {useState} from "react";

import LoginForm from "../../components/LoginForm";
import fetch from "../../utilities/fetch";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState();

    async function login(username: string, password: string) {
        try {
            const {token} = await fetch("post", "/users/login", {username, password}, {hello: "there"});
            localStorage.setItem("token", token);
            setTimeout(() => {
                navigate("/"); // Don't use window.location otherwise the page refreshes
            }, 3000)
        } catch (err: any) {
            setError(err.error);
        }
    }

    return (
        <main>
            <LoginForm onSubmit={login} error={error}/>
        </main>
    )
}

export default Login;