import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="ml-auto">

                   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown" id="nav-dropdown">
                                <Link to="/pdf" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Resume</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="assets/LT_2020_Resume.pdf">PDF</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container */}
            </nav>
        </div>

    )
}

export default NavBar;