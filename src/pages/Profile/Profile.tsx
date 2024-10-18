import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

interface props {
    setUser: Function,
}

function Profile() {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [displaySuccess, setDisplaySuccess] = useState(false);
}

export default Profile;