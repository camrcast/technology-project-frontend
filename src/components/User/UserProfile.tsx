import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/userContext';

export type UserProfileType = {
    username: string,
    bio: string,
    genres: string[]
}

function UserProfile(props: any) {
    const user: any = useContext(UserContext);

    const [userProfile, setUserProfile] = useState<UserProfileType>({
        username: user.username,
        bio: user.bio,
        genres: user.genres
    });

    function handleSubmit(event: any){
        event.preventDefault();
        props.setUser({...props.user, username: userProfile.username, bio: userProfile.bio});
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>Username</h4>
        <input type='text' value={userProfile.username ? userProfile.username : ''} placeholder='username' onChange={(e: any) => setUserProfile({...userProfile, username: e.target.value})}/>
        <h4>Bio</h4>
        <input type='text' value={userProfile.bio ? userProfile.bio : ''} placeholder='bio' onChange={(e: any) => setUserProfile({...userProfile, bio: e.target.value})}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default UserProfile