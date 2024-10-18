import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./ProfileUpdate.css";
import LoginForm from "../../components/LoginForm";
import fetch from "../../utilities/fetch";

function ProfileUpdate(){
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [displaySuccess, setDisplaySuccess] = useState(false);

    async function profile(username: string, bio: string, genres: string[]) {
        const userID = user ? user.itemID : undefined;
        try {
            const {updatedUser} = await fetch("post", `/users/${userID}`, {username, bio, genres});
            setDisplaySuccess(true);
            setUser(updatedUser);
            setTimeout(() => {
                navigate(window.location); // Don't use window.location otherwise the page refreshes
            }, 3000)
        } catch (err: any) {
            setError(err.error);
        }
        return (
            <main>
                <h1>Profile</h1>
                <div>{user && <p>Username: {user.username}</p>}</div>
                <div>{user && <p>Bio: {user.bio}</p>}</div>
                <div>{user && <p>Genres: {user.genres}</p>}</div>
                <div></div>
            </main>
        )
    }
}