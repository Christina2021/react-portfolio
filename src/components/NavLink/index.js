import React from 'react';
import { Link } from "react-router-dom"; 

function NavLink({ active, href, children}) {
    return(
        <li className="nav-item mr-5">
            <Link to={href} className={active === "true" ? "nav-link active" : "nav-link"}>{children}</Link>
        </li>
    )
}

export default NavLink;