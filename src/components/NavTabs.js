import React from "react";
import {Link, useLocation} from "react-router-dom";

function NavTabs() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            < li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Pupster
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
        </ul>
    )
}

export default NavTabs;