import React from "react";
import { Link } from "react-router-dom";

import NavLink from "../NavLink";
import "./Header.css";

function Header() {
    return(
        <header>
            <Link to="/" id="home">
                Some Catchy App Name or Logo
            </Link>
            <nav>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    )
}

export default Header;