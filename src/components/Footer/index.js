import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer className="sticky-footer">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-6 col-md-2">
                            <div className="social">
                                <a href="https://github.com/lturner19"><i className="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/leandraturner"><i className="fab fa-linkedin"
                                    id="link"></i></a>
                            </div>
                        </div>
                        {/* end of column 1  */}

                        <div className="col-sm-0 col-md-6">
                            <nav className="footer-nav">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#index">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="assets\LT_2020_Resume.pdf">Resume</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* end of column 2 */}

                        <div className="col-sm-6 col-md-4">
                            <p className="contact-info"><i className="far fa-envelope"></i> lturner19@protonmail.com</p>
                            <p className="contact-info"><i className="fas fa-mobile-alt"></i> 512.673.6253</p>
                        </div>
                        {/* end of column 3 */}
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer;