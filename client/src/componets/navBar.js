import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <nav>
            <Link to="/signup">
                Sign up &nbsp;  &nbsp;  &nbsp;  &nbsp;
            </Link>
            <Link to="/home">
                Home &nbsp;  &nbsp;  &nbsp;  &nbsp;
            </Link>
        </nav>
    )

}

export default navBar;
