import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/    ">    </Link>
            </li>
            <li>
                <Link to="/   ">    </Link>
            </li>
            <li>
                <Link to="/    ">    </Link>
            </li>
        </div>
    );
};

export default navBar;
