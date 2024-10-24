import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import fetch from "../../utilities/fetch";
import { User } from "../../context/userContext";
import "./Profile.css";
import Avatar from "../../components/Avatar";

interface Post {
    description: string,
    isFlagged: number,
    itemID: string,
    likedBy: string[],
    postedBy: string,
    replies: string[]
    score: number,
    title: string,
}

function Profile() {
    const {id} = useParams();
    const [user, setUser] = useState<User | undefined>();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const {user} = await fetch("get", `/users/${id}`);
                setUser(user);
            } catch (err: any) {
                setError(err.error);
            }
        }

        const getPosts = async () => {
            try {
                const {posts} = await fetch("get", "/posts", {postedBy: id});
                setPosts(posts);
            } catch (err: any) {
                setError(err.error);
            }
        }
        getUser();
        getPosts();
    }, []);
    return (
        <main id="profile">
            <h1>Profile</h1>
            {user && 
            <>
                <section id="account-info" className="flex g10">
                    <div className="flex col justify-center align-center g10">
                        <img className="profile-image" src={user.profileImage} alt="Profile Image"/>
                        <h2>{user.username}</h2>
                    </div>
                    <div className="flex col justify-evenly">
                        <p>Bio: {user.bio}</p>
                        <p>Genres: {user.genres}</p>
                    </div>
                </section>
                <section id="account-posts">
                    Posts
                    {posts.map((post: Post) => {
                        const {title, description, score, likedBy} = post;
                        return <div>{title}{description}{score}{likedBy.length}</div>
                    })}
                </section>
            </>
            }
        </main>
    )
}

export default Profile;