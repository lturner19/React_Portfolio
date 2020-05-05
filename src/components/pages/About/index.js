import React from 'react';
import "./About.css";
import { Grid, Cell, } from 'react-mdl';

function About() {
    return (
        <div className="body">
            <h2>ABOUT ME</h2>
            <Grid className="about-grid">
                <Cell col={3}>
                    <img className="profile-img" src="/images/Leandra-Profile.png" alt="profile" />
                </Cell>

                <Cell col={9}>
                    <div className="about-info">
                        <p>I am currently enrolled in a web development bootcamp provided by Triology Educations
                        Services' Full-Stack Coding Bootcamp, through the University of Texas at Austin.
                        The Bootcamp has given me the opportunity to learn both front end coding and  back end coding languages as well as React.js.
                        After completing the bootcamp, May 2020,  I plan to pursue a career in the coding field.
                        </p>
                        <p>I recieved my BA degree in Biology from Concordia University Texas in 2008.
                        Shortly thereafter, began working for Ascension Health in the Histology department.
                        While there I was able to earn my certification as a Histology Technician and perform various aspects of histology to include: routine histology, muscle
                        enzyme histochemistry, electron microscopy, immunohistochemistry.
                        </p>

                        <p>I prefer to spend my free time involved with my dog Callie. I also
                        enjoys trying my hand at various hobbies that include: baking, knitting,
                        gardening, and flower arranging.
                        </p>
                    </div>
                </Cell>

            </Grid>
        </div>
    )
}


export default About;