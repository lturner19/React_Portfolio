import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';


function NavBar() {
    return (
        <div >
            <Layout >
                <Header className="header" title="Portfolio" scroll>
                    <Navigation className="main-nav">
                        <Link className="nav" to="/">Home</Link>
                        <Link className="nav" to="/aboutme">About</Link>
                        <Link className="nav" to="/contact">Contact</Link>
                        <Link className="nav" to="/projects">Projects</Link>
                        <a className="nav" href="/LT_2020_Resume.pdf" target="_blank">Resume</a>
                    </Navigation>
                </Header>
                <Drawer title="Portfolio">
                    <Navigation>
                        <Link className="nav" to="/aboutme">About</Link>
                        <Link className="nav" to="/contact">Contact</Link>
                        <Link className="nav" to="/projects">Projects</Link>
                        <a className="nav" href="/LT_2020_Resume.pdf" target="_blank">Resume</a>
                    </Navigation>
                </Drawer>
            </Layout>
        </div>
    )
}

export default NavBar;