import React from 'react';
import "./Contact.css";
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

function Contact() {
    return (
        <div className="body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2 className="heading">Questions ?</h2>
                    <img className="question-img" src="/images/2368872.jpg" alt="bubble with question mark" />
                </Cell>
                <Cell col={6}>
                    <h2 className="heading">Contact Me</h2>
                    <hr />
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent className="list-item">
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    <span>512-673-6253</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="list-item">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>lturner19@protonmail.com</span>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent className="social">
                                    <a href="https://www.linkedin.com/in/leandraturner" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                </ListItemContent>
                                <ListItemContent className="social"><a href="https://github.com/lturner19" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i></a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;

