import React from 'react';

function NavLink({ active, href, children}) {
    return(
        <li className="nav-item mr-5">
            <a className={active === "true" ? "nav-link active" : "nav-link"} href={href}>{children}</a>
        </li>
    )
}

export default NavLink;