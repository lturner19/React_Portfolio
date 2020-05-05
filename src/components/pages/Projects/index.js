import React from 'react';
import "./Projects.css";
import projects from "../../../projects.json";
import { Card, CardTitle, CardActions, CardText, Grid, Cell } from "react-mdl";



function Projects() {
    return (
        <div className="body">
            <h2>PORTFOLIO</h2>
            <Grid className="projects-grid">
                {projects.map((project) => {
                    return (
                        <Cell col={4} key={project.id}>
                            <Card className="card" shadow={5}>
                                <CardTitle className="card-title">
                                    <img className="card-img" src={project.src} alt={project.alt} />
                                </CardTitle>
                                <CardText className="title">{project.title}</CardText>

                                <CardActions border className="links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">REPOSITORY</a>
                                    <a href={project.webpage} target="_blank" rel="noopener noreferrer">WEBPAGE</a>
                                </CardActions>
                            </Card>
                        </Cell>

                    )
                }
                )}
            </Grid>
        </div>
    )
}

export default Projects;