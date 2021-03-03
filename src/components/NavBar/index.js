import React from 'react';
import NavLink from '../NavLink';
import './styles.css'

function NavBar() {
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2 className="navbar-brand mb-0">
                <a href="/" className="text-decoration-none">Christina Shiroma</a>
            </h2>
            <button className="navbar-toggler me-5" type="button" data-toggle="collapse" data-target="#navbarChristinasContent" aria-controls="navbarChristinasContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarChristinasContent">
                <ul className="navbar-nav ml-auto">
                    <NavLink active="true" href="/about">About Me</NavLink>
                    <NavLink active="false" href="/portfolio">My Portfolio</NavLink>
                    <NavLink active="false" href="/contact">Contact Me</NavLink>
                </ul>
            </div>
        </nav>
      </header>
    )
}

export default NavBar;