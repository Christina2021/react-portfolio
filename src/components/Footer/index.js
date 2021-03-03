import React from 'react';
import './styles.css';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="mt-auto footerAll">
            <div className="footerRow"></div>
            <div className="container py-3">
                <div className="row footerSpace">
                    <div className="col">
                        <span className="mx-auto">&copy; Copyright {year} &nbsp;&nbsp; <a className="footer-icon me-2" href="https://www.linkedin.com/in/christina2021/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a><a className="ml-1 footer-icon" href="https://github.com/Christina2021" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;