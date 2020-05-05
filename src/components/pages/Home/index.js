import React from 'react';
import './Home.css';
import { Grid, Cell } from 'react-mdl'


function Home() {
    return (
        <div className="main">
            <Grid className="home-grid">
                <Cell col={12}>
                    <div className="banner-text">
                        <h1>Leandra Turner</h1>
                        <h3>Full Stack Web Developer</h3>
                        <hr />
                        <p>HTML/CSS | Bootstrap | JavaScript | Vue.js | React.js | Node.js | MongoDB | mySQL</p>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Home;