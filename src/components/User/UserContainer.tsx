import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/userContext';
import UserProfile, { UserProfileType } from '../User/UserProfile';

const URL = "http://localhost:3001";
const id = "601920b2-ed8b-41b5-ba71-25bfe30b931f";

function UserContainer(props: any) {
  //const user: any = useContext(UserContext);
  
  return (
    <UserProfile setUser={props.setUser}/>
  )
}

export default UserContainer