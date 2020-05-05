import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';


function NavBar() {
    return (
        <div >
            <Layout>
                <Header className="nav-header" title="Portfolio" scroll>
                    <Navigation className="main-nav">
                        <Link className="nav" to="/">Home</Link>
                        <Link className="nav" to="/about">About</Link>
                        <Link className="nav" to="/portfolio-projects">Projects</Link>
                        <Link className="nav" to="/contact">Contact</Link>
                        <Link className="nav" to="/LT_2020_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
                    </Navigation>
                </Header>
                <Drawer className="nav-header" title="Portfolio">
                    <Navigation>
                        <Link className="nav" to="/">Home</Link>
                        <Link className="nav" to="/about">About</Link>
                        <Link className="nav" to="/portfolio-projects">Projects</Link>
                        <Link className="nav" to="/contact">Contact</Link>
                        <Link className="nav" to="/LT_2020_Resume.pdf" target="_blank">Resume</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        </div>
    )
}

export default NavBar;